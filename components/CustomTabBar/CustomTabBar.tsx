// components/CustomTabBar/customTabBar.tsx
import type { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import {
    Calendar,
    Home,
    NotebookText,
    ShoppingCart,
    User,
} from "lucide-react-native";
import React from "react";
import {
    Dimensions,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";

const { width } = Dimensions.get("window");

export default function CustomTabBar(props: BottomTabBarProps) {
  const { state, descriptors, navigation } = props;
  const centerRouteName = "carrinho";

  return (
    <View style={styles.container}>
      {state.routes.map((route, idx) => {
        const isFocused = state.index === idx;
        const { options } = descriptors[route.key];

        // reserva o espaço para o botão central
        if (route.name === centerRouteName) {
          return <View key={route.key} style={styles.centerPlaceholder} />;
        }

        // 1) Obter um label "seguro" independente do formato que o options fornece
        // options.tabBarLabel pode ser: undefined | string | (props) => ReactNode
        // options.title pode ser string | undefined
        const rawLabel =
          (options as any)?.tabBarLabel ??
          options?.title ??
          (route.name === "index" ? "Início" : route.name);

        // cor e props que podem ser passados se tabBarLabel for função
        const color = isFocused ? "#0A84FF" : "#828181";
        const labelNode: React.ReactNode =
          typeof rawLabel === "function"
            ? // se for função, chamamos com um objeto compatível (algumas versões do RN expect: focused,color,position)
              (rawLabel as Function)({
                focused: isFocused,
                color,
                position: "below-icon",
              })
            : // senão, usamos como string/ReactNode direto
              rawLabel;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name as never);
          }
        };

        // evitar erro de tipagem do TS — testID pode não existir no tipo de options
        const testID = (options as any)?.tabBarTestID as string | undefined;

        const icon = getIconForRoute(route.name, isFocused);

        return (
          <TouchableOpacity
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={testID}
            onPress={onPress}
            style={styles.tabButton}
            activeOpacity={0.8}
          >
            {icon}
            {/* renderiza labelNode — pode ser string, elemento React ou resultado de função */}
            {typeof labelNode === "string" || typeof labelNode === "number" ? (
              <Text style={[styles.label, isFocused && styles.labelActive]}>
                {labelNode}
              </Text>
            ) : (
              // se for um React element, renderiza diretamente; se precisar envolver em Text, depende do que a função retornou
              <View style={styles.customLabelWrapper}>
                {labelNode as React.ReactNode}
              </View>
            )}
          </TouchableOpacity>
        );
      })}

      {/* Botão central flutuante (Carrinho) */}
      <View style={styles.floatingWrapper} pointerEvents="box-none">
        <TouchableOpacity
          style={styles.floatingButton}
          activeOpacity={0.85}
          onPress={() => navigation.navigate(centerRouteName as never)}
          accessibilityRole="button"
          accessibilityLabel="Abrir carrinho"
        >
          <ShoppingCart size={22} strokeWidth={2} color="#000" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

function getIconForRoute(routeName: string, active: boolean) {
  const size = 20;
  const color = active ? "#0A84FF" : "#828181";

  switch (routeName) {
    case "index":
      return <Home size={size} color={color} />;
    case "pedidos":
      return <NotebookText size={size} color={color} />;
    case "calendario":
      return <Calendar size={size} color={color} />;
    case "perfil":
      return <User size={size} color={color} />;
    default:
      return <Home size={size} color={color} />;
  }
}

const styles = StyleSheet.create({
  container: {
    height: 100,
    backgroundColor: "#ffffffff",
    alignItems: 'flex-start',
    justifyContent: "center",
    flexDirection: "row",
    // position: 'absolute',
    // bottom: 0,
    // left: 0,
    // right: 0,
  },
  tabButton: {
    alignItems: "center",
    justifyContent: "center",
    width: (width - 80) / 4,
    paddingTop: 8,
  },
  label: {
    fontSize: 11,
    marginTop: 2,
    color: "#828181",
  },
  labelActive: {
    color: "#0A84FF",
    fontWeight: "600",
  },
  customLabelWrapper: {
    marginTop: 2,
    alignItems: "center",
    justifyContent: "center",
  },
  centerPlaceholder: {
    width: 80,
  },
  floatingWrapper: {
    position: "absolute",
    top: -20,
    left: (width - 64) / 2,
    width: 64,
    height: 64,
    alignItems: "center",
    justifyContent: "center",
  },
  floatingButton: {
    width: 64,
    height: 64,
    borderRadius: 32,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.12,
    shadowRadius: 8,
    elevation: 8,
    borderWidth: 0.5,
    borderColor: "#eee",
  },
});
