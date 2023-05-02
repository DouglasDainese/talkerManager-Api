<body>
	<h1>Talker Manager</h1>
	<p>Este projeto é uma API de gerenciamento de palestrantes desenvolvido como parte do módulo de introdução ao Node.js do curso de desenvolvimento web da Trybe.</p>
	<p>A API permite que os usuários gerenciem palestrantes, incluindo a criação, atualização e exclusão de palestrantes. Além disso, é possível obter uma lista de todos os palestrantes cadastrados e visualizar informações detalhadas sobre cada um deles.</p>
	<h2>Tecnologias utilizadas</h2>
	<ul>
		<li>Node.js</li>
		<li>Express</li>
	</ul>
	<h2>Como utilizar o projeto</h2>
	<ol>
		<li>Clone o repositório em sua máquina:</li>
		<pre><code>git clone https://github.com/DouglasDainese/talkerManager-Api.git</code></pre>
		<li>Instale as dependências do projeto:</li>
		<pre><code>npm install</code></pre>
		<li>Inicie a aplicação:</li>
		<pre><code>npm start</code></pre>
		<li>Acesse a aplicação em seu navegador, através do endereço:</li>
		<pre><code>http://localhost:3000</code></pre>
	</ol>
	<h2>Endpoints disponíveis</h2>
	<ul>
		<li>GET /talker - retorna uma lista com todos os palestrantes cadastrados</li>
		<li>GET /talker/:id - retorna informações detalhadas sobre um palestrante específico</li>
		<li>POST /talker - cria um novo palestrante</li>
		<li>PUT /talker/:id - atualiza as informações de um palestrante específico</li>
		<li>DELETE /talker/:id - exclui um palestrante específico</li>
	</ul>
	<h2>Contribuindo</h2>
	<p>Se você deseja contribuir com o projeto, fique à vontade para abrir uma Pull Request ou uma Issue em nosso repositório no GitHub.</p>
	<h2>Licença</h2>
	<p>Este projeto está licenciado sob a Licença MIT. Consulte o arquivo LICENSE para obter mais informações.</p>
</body>
</html>
