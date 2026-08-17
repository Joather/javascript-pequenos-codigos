function Carro(modelo, ano){
	this.modelo = modelo;
	this.ano = ano;
};

Carro.prototype.descricao = function() {
	console.log(this.modelo + " ("+ this.ano + ")");
};

const civic = new Carro("Civic", 1995);

civic.descricao();
