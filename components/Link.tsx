import _Link from "next/link";

export function Link({ children, href, ...props }) {
  const handleRemoveStyleServer = () => {
    const ssrStyle = document.querySelector('#ssr-style');
    if (ssrStyle && ssrStyle.parentNode) {
      setTimeout(() => {
        ssrStyle.parentNode.removeChild(ssrStyle);
        console.log('Removed style from server!');
      }, 0);
    }
  };

  return <_Link href={href} {...props}>
    <div onClick={handleRemoveStyleServer}>{children}</div>
  </_Link>
}