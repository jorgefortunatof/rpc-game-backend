# Inicializar
Para inicializar o servidor basta rodar um **npm** **install** e um **npm** **start** em seguida.

# Rotas

## Responder
Nessa rota você deve enviar o id do cliente que deve ser 1 ou 2
e se ele vai testemunhar ou não (1 ou 0).
- É uma rota POST, e você deve passar o seguinte body:
```javascript
{
    "jsonrpc": "2.0",
    "method": "responder",
    "params": {
			"cliente": 1,
			"testemunhar": 0
    },
	"id": 1
 }
```

## Consultar
Essa rota serve para você consultar o estado atual dos dados.
- É uma rota POST, e você deve passar o seguinte body:
```javascript
{
    "jsonrpc": "2.0",
    "method": "consultar",
		"id": 1
 }
```

## Limpar
Essa rota serve para reiniciar o jogo.
- É uma rota POST, e você deve passar o seguinte body:
```javascript
{
    "jsonrpc": "2.0",
    "method": "limpar",
		"id": 1
 }
```