import React, { useState, useEffect } from "react";

const defaultConfig = {
  darkMode: false,
  notifications: true,
  // language: "es", // Ejemplo para futuras opciones
  // privacyMode: false, // Ejemplo para futuras opciones
};

const Config = () => {
  const [config, setConfig] = useState(() => {
    const saved = localStorage.getItem("config");
    return saved ? JSON.parse(saved) : defaultConfig;
  });
  const [originalConfig, setOriginalConfig] = useState(config);
  const [saved, setSaved] = useState(false);
  const [cancelled, setCancelled] = useState(false);

  useEffect(() => {
    // Actualiza el modo oscuro del documento si cambia
    document.documentElement.classList.toggle("dark", config.darkMode);
  }, [config.darkMode]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, type } = e.target;
    const value = type === "checkbox" ? (e.target as HTMLInputElement).checked : e.target.value;
    setConfig((prev) => ({ ...prev, [name]: value }));
    setSaved(false);
    setCancelled(false);
  };

  const handleSave = () => {
    localStorage.setItem("config", JSON.stringify(config));
    setOriginalConfig(config);
    setSaved(true);
    setCancelled(false);
  };

  const handleCancel = () => {
    setConfig(originalConfig);
    setCancelled(true);
    setSaved(false);
  };

  return (
    <div className="max-w-2xl mx-auto mt-16 p-10 bg-zinc-900/95 text-white rounded-2xl shadow-2xl flex flex-col gap-8 border border-zinc-800">
      <h1 className="text-4xl font-extrabold mb-2 flex items-center gap-2">
        <span role="img" aria-label="gear">⚙️</span> Configuración
      </h1>
      <p className="text-zinc-400 mb-4 text-lg">Personaliza tu experiencia en la aplicación</p>

      {/* Preferencias principales */}
      <section className="bg-zinc-800/80 rounded-xl p-6 mb-2 flex flex-col gap-4 border border-zinc-700">
        <h2 className="text-xl font-semibold mb-2">Preferencias generales</h2>
        <div className="flex flex-col gap-3">
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="darkMode"
              checked={config.darkMode}
              onChange={handleChange}
              className="accent-cyan-400 w-5 h-5 transition-all duration-150"
            />
            <span className="text-base">Modo oscuro</span>
          </label>
          <label className="flex items-center gap-3 cursor-pointer">
            <input
              type="checkbox"
              name="notifications"
              checked={config.notifications}
              onChange={handleChange}
              className="accent-cyan-400 w-5 h-5 transition-all duration-150"
            />
            <span className="text-base">Notificaciones</span>
          </label>
        </div>
      </section>

      {/* Ejemplo de sección futura: idioma */}
      {/**
      <section className="bg-zinc-800/80 rounded-xl p-6 mb-2 flex flex-col gap-4 border border-zinc-700">
        <h2 className="text-xl font-semibold mb-2">Idioma</h2>
        <select
          name="language"
          value={config.language}
          onChange={handleChange}
          className="bg-zinc-900 text-white rounded-lg px-4 py-2 border border-zinc-600 focus:outline-none focus:ring-2 focus:ring-cyan-400"
        >
          <option value="es">Español</option>
          <option value="en">English</option>
        </select>
      </section>
      */}

      {/* Ejemplo de sección futura: privacidad */}
      {/**
      <section className="bg-zinc-800/80 rounded-xl p-6 mb-2 flex flex-col gap-4 border border-zinc-700">
        <h2 className="text-xl font-semibold mb-2">Privacidad</h2>
        <label className="flex items-center gap-3 cursor-pointer">
          <input
            type="checkbox"
            name="privacyMode"
            checked={config.privacyMode}
            onChange={handleChange}
            className="accent-cyan-400 w-5 h-5"
          />
          <span className="text-base">Modo privacidad</span>
        </label>
      </section>
      */}

      <div className="flex gap-4 justify-end mt-6">
        <button
          className="px-7 py-2 rounded-lg text-base font-bold bg-cyan-400 text-zinc-900 hover:bg-cyan-300 shadow transition-all duration-150"
          type="button"
          onClick={handleSave}
        >
          Guardar
        </button>
        <button
          className="px-7 py-2 rounded-lg text-base font-bold bg-red-500 text-white hover:bg-red-400 shadow transition-all duration-150"
          type="button"
          onClick={handleCancel}
        >
          Cancelar
        </button>
      </div>

      {/* Feedback visual animado */}
      <div className="min-h-[32px] mt-2">
        {saved && (
          <div className="animate-fade-in text-cyan-400 bg-cyan-900/20 px-4 py-2 rounded-lg text-center shadow">
            ¡Configuración guardada!
          </div>
        )}
        {cancelled && (
          <div className="animate-fade-in text-red-400 bg-red-900/20 px-4 py-2 rounded-lg text-center shadow">
            Cambios cancelados.
          </div>
        )}
      </div>
    </div>
  );
};

export default Config;