const SocialIcon = ({data}) => {
  let isDownload = data.name == 'Resume' ? true : false; 
  console.log(isDownload);
  return (
    <li>
      <a href={data.url} target="_blank" rel="noopener" className="social-linkd"      download={isDownload}
        dangerouslySetInnerHTML={{ __html: data.icon }}
            >
        </a>
    </li>
  )
}

export default SocialIcon