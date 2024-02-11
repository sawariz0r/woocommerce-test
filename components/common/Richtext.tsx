// Parse incoming html and render it as React components
/*
font-family: Inter;
font-size: 16px;
font-weight: 400;
line-height: 24px;
letter-spacing: 0em;
text-align: left;
 */
export default function Richtext({html}: {html: string}) {
	// TODO: Do this properly, this is just a quick and dirty way to render html

	return <div dangerouslySetInnerHTML={{__html: html}} className="leading-6 py-[13px] max-w-[480px]" />;
}
