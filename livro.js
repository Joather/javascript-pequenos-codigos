function Livro(anoLancamento, autor) {
	this.anoLancamento = anoLancamento;
	this.autor = autor
};

Livro.prototype.descricao = function() {
	console.log(this.anoLancamento + "("+ this.autor + ")")
}

const twilight = new Livro(2005, "Stephenie Meyer");

twilight.descricao();
