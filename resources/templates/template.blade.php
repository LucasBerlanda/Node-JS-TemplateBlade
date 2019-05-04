<meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Cadastro</title>
</head>
<body>
    <header> 
       @yield('cabecalho');
    </header>
    
    <div class="conteudo">
        <form action="/uf/salvar" method="POST">
                <input type="text" name="nome" placeholder="Nome" required>
                <br>
                <input type="text" name="sigla" placeholder="Sigla" required>
                <br>
                <button type="submit">Cadastrar</button>
            </form>
    </div>

</body>
</html>