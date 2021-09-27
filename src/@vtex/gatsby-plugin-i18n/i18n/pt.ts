import {
  searchSuggestionsI18nPT,
  authProvidersI18nPT,
  minicartI18nPT,
} from '@vtex/store-ui'

export default {
  ...minicartI18nPT,

  ...searchSuggestionsI18nPT,

  ...authProvidersI18nPT,
  'login.button.greeting': 'Olá {name}',
  'login.button.action': 'Entrar',

  'shelf.title.0': 'Ofertas',

  'social.share': 'Compartilhar',

  'offer.product-unavailable': 'Product indisponivel',
  'offer.units-left': '{quantity} unidades!',
  'offer.installments': 'Ate {numberOfInstallments}x {value} sem juros',
  'offer.discount': ' Economize {price}',

  'productDetails.reference': 'Referencia',
  'product-not-found': 'Product não encontrado',
  'error-generic': 'Erro',

  'buy-button.add-to-cart': 'ADICIONAR AO CARRINHO',

  'facets.filters': 'Filtrar Por:',

  loading: 'Carregando...',

  'notification-bar.sale': 'ITEM SELECIONADOS EM PROMOÇÃO! DÊ UMA OLHADA!',

  'search.page-list.next': 'Mostrar mais',
  'search.page-list.previous': 'Ver anteriores',

  'product.quantity.title': 'Quantidade',

  'searchControls.totalCount':
    '{count,plural,=0{ PRODUTOS}one{ PRODUTO}other{ PRODUTOS}}',
  'searchControls.filters': 'Filtros',
  'searchControls.select.scoreDesc': 'Relevância',
  'searchControls.select.priceDesc': 'Preço: Maior ao Menor',
  'searchControls.select.priceAsc': 'Preço: Menor ao Maior',
  'searchControls.select.topSaleDesc': 'Mais vendidos',
  'searchControls.select.reviewRateDesc': 'Reviews',
  'searchControls.select.nameDesc': 'Nome, decrescente',
  'searchControls.select.nameAsc': 'Nome, crescente',
  'searchControls.select.releaseDateDesc': 'Lançamentos',
  'searchControls.select.bestDiscountDesc': 'Desconto',

  'error.title': 'Ops, ocorreu um erro!',
  'error.action': 'Por favor, volte ao início e tente novamente',
  'error.action.button': 'Voltar ao início',
  'error.detail': 'Erro: {errorId}',
}
