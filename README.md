1. List.of = of é para não buscar nada fora, tipo buscar de banco de dados, esse of é para usar o mocado estático que criamos ali dentro.

`EXEMPLO:`

     public List<Usuario> listarUsuarios() {
        return List.of(
                new Usuario(1L, "João", "joao@example.com"),
                new Usuario(2L, "Maria", "maria@example.com"),
                new Usuario(3L, "Pedro", "pedro@example.com"));
    }