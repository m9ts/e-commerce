function Stars({ rating, reviews }) {
  return (
    <div className="product-rating">
      <div className="rating-stars">
        {Array.from({ length: 5 }).map((_, index) => (
          <span
            key={index}
            className={index < rating ? 'star preenchida' : 'star'}
          >
            ★
          </span>
        ))}
      </div>

      <span className="rating-reviews">
        ({reviews})
      </span>
    </div>
  );
}

export default Stars;