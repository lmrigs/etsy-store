import "../Styles/Products.scss";

function Category(props) {
  return (
    <div className="product-card">
      <img src={props.imageSrc} alt={props.text} />
      <div className="category">
        <p>{props.text}</p>
      </div>
      <div className="cta">
        <a href={props.etsy} target="_blank">
          shop on etsy
        </a>
      </div>
    </div>
  );
}

export default function Products() {
  return (
    <div className="product-list" id="products">
      <Category
        text="Featured Category"
        etsy="https://www.etsy.com/ca/listing/659971493/laminated-wood-cuff-bracelets?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=hardwood+bracelets&ref=sr_gallery-1-1&organic_search_click=1"
      />
      <Category
        text="Featured Category 2"
        etsy="https://www.etsy.com/ca/listing/659971493/laminated-wood-cuff-bracelets?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=hardwood+bracelets&ref=sr_gallery-1-1&organic_search_click=1"
      />
      <Category
        text="Featured Category 3"
        etsy="https://www.etsy.com/ca/listing/659971493/laminated-wood-cuff-bracelets?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=hardwood+bracelets&ref=sr_gallery-1-1&organic_search_click=1"
      />
      <Category
        text="Featured Category 4"
        etsy="https://www.etsy.com/ca/listing/659971493/laminated-wood-cuff-bracelets?ga_order=most_relevant&ga_search_type=all&ga_view_type=gallery&ga_search_query=hardwood+bracelets&ref=sr_gallery-1-1&organic_search_click=1"
      />
    </div>
  );
}
