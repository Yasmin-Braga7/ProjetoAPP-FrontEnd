// _layout.tsx

import { Stack } from "expo-router";
import React, { JSX } from 'react'; // Importar React é uma boa prática no TS/TSX

export default function RootLayout(): JSX.Element {
  return (
    <Stack 
      screenOptions={{ 
        // Define que o cabeçalho padrão de todas as telas será oculto
        headerShown: false 
      }} 
    />
  );
}