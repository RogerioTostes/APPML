import axios from "axios";

export async function getProdutos() {
  try {
    const response = await axios.get(
      "https://api.mercadolibre.com/sites/MLB/search?status=active&seller_id=133487942&limit=50"
    );
    const { data } = response;

    const retorno = data.results.map((x) => {
      return {
        key: x.id,
        nome: x.title,
        valor: x.price.toFixed(2),
        valorComissao: (0.02 * x.price).toFixed(2),
        nomeVendedor: x.seller.eshop.nick_name,
        estoque: x.sold_quantity,
        rating: Math.floor(Math.random() * 6) + 1,
        link: x.permalink,
        imagem: x.thumbnail,
      };
    });

    return retorno;
  } catch (err) {
    return [];
  }
}
