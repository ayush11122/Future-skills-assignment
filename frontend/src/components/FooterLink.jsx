function FooterLink({ name, url }) {
  return (
    <li>
      <a href={url} className="hover:underline text-sm text-gray-300">
        {name}
      </a>
    </li>
  );
}

export default FooterLink;
