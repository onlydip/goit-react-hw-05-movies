export function ReviewsList({ reviews }) {
  return (
    <ul>
      {reviews.length > 0 &&
        reviews.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Author: {author}</h3>
            <p>{content}</p>
          </li>
        ))}
    </ul>
  );
}
