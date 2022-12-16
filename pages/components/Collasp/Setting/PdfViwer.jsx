import React from "react";
import { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import useEffectOnce from "../../../Helpers/use-effect-once";

const PdfViwer = () => {
  const containerRef = useRef(null);

	useEffectOnce(() => {
		const container = containerRef.current;
		let PSPDFKit;

		(async function () {
			PSPDFKit = await import('pspdfkit');

			if (PSPDFKit) {
				PSPDFKit.unload(container);
			}

			await PSPDFKit.load({
				container,
        
				document: 'http://localhost:7301/display/test.pdf',
				baseUrl: `${window.location.protocol}//${window.location.host}/`,
			});
		})();

		return () => PSPDFKit && PSPDFKit.unload(container);
	}, []);
  return <div ref={containerRef} style={{ height: '100vh' ,width:'100%'}} />;
};

export default PdfViwer;
