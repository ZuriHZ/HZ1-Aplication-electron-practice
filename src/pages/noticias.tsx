import React, { useRef, useState } from "react";

const NEWS_SITES = [
    { name: "YouTube", url: "https://www.youtube.com/" },
    { name: "BBC News", url: "https://www.bbc.com/news" },
    { name: "CNN", url: "https://edition.cnn.com/" },
    { name: "El País", url: "https://elpais.com/" },
    { name: "Reuters", url: "https://www.reuters.com/" },
    { name: "AlertaMundialX", url: "https://x.com/AlertaMundoNews" },
];

const Noticias = () => {
    const [site, setSite] = useState(NEWS_SITES[0].url);
    const webviewRef = useRef(null);
    const [webviewError, setWebviewError] = useState(false);

    const handleReload = () => {
        if (webviewRef.current) {
            // @ts-ignore
            webviewRef.current.reload();
        }
        setWebviewError(false);
    };

    return (
        <div className=" mt-20 p-8 bg-zinc-900 text-white rounded-xl shadow-lg flex flex-col gap-6">
            <div className="flex items-center justify-between mb-2">
                <h1 className="text-3xl font-bold flex-1">📰 Noticias</h1>
                <button
                    className="ml-4 px-3 py-1 bg-zinc-700 hover:bg-zinc-600 rounded text-sm font-semibold border border-zinc-500 transition"
                    onClick={handleReload}
                >
                    Recargar
                </button>
            </div>
            <div className="flex flex-row gap-2 mb-2">
                <span className="text-sm text-zinc-300">Sitio:</span>
                <select
                    className="bg-zinc-800 text-white border border-zinc-600 rounded px-2 py-1 text-sm focus:outline-none"
                    value={site}
                    title="Seleccionar sitio de noticias"
                    onChange={(e) => {
                        setSite(e.target.value);
                        setWebviewError(false);
                    }}
                >
                    {NEWS_SITES.map((s) => (
                        <option key={s.url} value={s.url}>
                            {s.name}
                        </option>
                    ))}
                </select>
            </div>
            <div className="w-[70rem] h-[700px] border-2 border-white rounded-2xl overflow-hidden bg-zinc-800 flex items-center justify-center">
                {/* El webview solo funciona en Electron, no en navegadores normales */}
                {typeof window !== "undefined" && (window as any).isElectron ? (
                    webviewError ? (
                        <div className="text-center text-red-400 px-4">
                            <span className="text-lg font-semibold">
                                No se pudo cargar el sitio seleccionado.
                            </span>
                            <br />
                            <span className="text-sm text-zinc-400">
                                Es posible que el sitio no permita ser mostrado
                                dentro de la app. Prueba con otro sitio o ábrelo
                                en el navegador externo.
                            </span>
                        </div>
                    ) : (
                        <webview
                            ref={webviewRef}
                            src={site}
                            className="w-full h-full border-none"
                            allowpopups={true}
                            onError={() => setWebviewError(true)}
                        />
                    )
                ) : (
                    <div className="text-white text-center px-4">
                        <span className="text-lg font-semibold">
                            El navegador de noticias solo está disponible en la
                            app de escritorio.
                        </span>
                        <br />
                        <span className="text-sm text-zinc-400">
                            Abre la aplicación en el entorno de escritorio para
                            ver las noticias.
                        </span>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Noticias;
