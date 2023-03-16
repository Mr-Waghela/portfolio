const SocialIcon = ({data}) => {
  return (
    <li>
          <a href={data.url} target="_blank" rel="noopener" className="social-linkd"
              dangerouslySetInnerHTML={{ __html: data.icon }}
            >
        </a>
    </li>
  )
}

export default SocialIcon