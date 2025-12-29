import { useState } from "react";
import {
    Smartphone,
    Share,
    PlusSquare,
    MoreVertical,
    Apple,
    ExternalLink,
    Download
} from "lucide-react";

type AppType = "customer" | "driver";
type OsType = "android" | "ios";

export const InstallTabs = () => {
    const [activeApp, setActiveApp] = useState<AppType>("customer");
    const [activeOs, setActiveOs] = useState<OsType>("android");

    const appData = {
        customer: {
            title: "SaKu App",
            url: "https://app.saku.click",
            description: "Aplikasi untuk Penumpang",
            color: "from-primary to-emerald-600",
            iconBg: "bg-primary/10 text-primary"
        },
        driver: {
            title: "SaKu Driver",
            url: "https://driver.saku.click",
            description: "Aplikasi untuk Driver",
            color: "from-blue-500 to-indigo-600",
            iconBg: "bg-blue-50 text-blue-600"
        }
    };

    const currentAppUrl = appData[activeApp].url.replace("https://", "");

    const steps = {
        android: [
            {
                icon: <Download className="w-5 h-5 md:w-6 md:h-6" />,
                title: "1. Buka Browser Chrome",
                desc: `Akses ${currentAppUrl} di Google Chrome.`
            },
            {
                icon: <MoreVertical className="w-5 h-5 md:w-6 md:h-6" />,
                title: "2. Buka Menu Opsi",
                desc: "Ketuk ikon titik tiga (⠇) di pojok kanan atas browser."
            },
            {
                icon: <Smartphone className="w-5 h-5 md:w-6 md:h-6" />,
                title: "3. Install App",
                desc: "Pilih 'Install App' atau 'Tambahkan ke Layar Utama'."
            }
        ],
        ios: [
            {
                icon: <Apple className="w-5 h-5 md:w-6 md:h-6" />,
                title: "1. Buka Safari",
                desc: `Akses ${currentAppUrl} menggunakan browser Safari.`
            },
            {
                icon: <Share className="w-5 h-5 md:w-6 md:h-6" />,
                title: "2. Ketuk Tombol Share",
                desc: "Ikon kotak dengan panah ke atas di bagian bawah layar."
            },
            {
                icon: <PlusSquare className="w-5 h-5 md:w-6 md:h-6" />,
                title: "3. Add to Home Screen",
                desc: "Scroll ke bawah dan pilih 'Add to Home Screen'."
            }
        ]
    };

    const currentApp = appData[activeApp];
    const currentSteps = steps[activeOs];

    return (
        <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
            {/* App Selection Tabs */}
            <div className="flex border-b border-gray-100">
                <button
                    onClick={() => setActiveApp("customer")}
                    className={`flex-1 py-4 md:py-6 text-center font-sans font-bold text-lg md:text-xl transition-all ${activeApp === "customer"
                        ? "bg-white text-emerald-600 border-b-2 border-emerald-500"
                        : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                        }`}
                >
                    Penumpang
                </button>
                <button
                    onClick={() => setActiveApp("driver")}
                    className={`flex-1 py-4 md:py-6 text-center font-sans font-bold text-lg md:text-xl transition-all ${activeApp === "driver"
                        ? "bg-white text-blue-600 border-b-2 border-blue-500"
                        : "bg-gray-50 text-gray-500 hover:bg-gray-100"
                        }`}
                >
                    Driver
                </button>
            </div>

            <div className="p-4 md:p-10">
                {/* Header Info */}
                <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-6">
                    <div className="text-center md:text-left">
                        <h3 className={`font-sans text-3xl font-bold bg-gradient-to-r ${currentApp.color} bg-clip-text text-transparent mb-2`}>
                            {currentApp.title}
                        </h3>
                        <p className="font-mono text-gray-500">{currentApp.description}</p>
                    </div>

                    <a
                        href={currentApp.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`flex items-center gap-2 px-6 py-3 rounded-full font-mono font-bold text-white transition-transform hover:scale-105 shadow-lg ${activeApp === 'customer' ? 'bg-primary hover:bg-emerald-500' : 'bg-blue-600 hover:bg-blue-500'}`}
                    >
                        Buka Aplikasi
                        <ExternalLink className="w-4 h-4" />
                    </a>
                </div>

                {/* OS Selection */}
                <div className="flex justify-center gap-4 mb-10">
                    <button
                        onClick={() => setActiveOs("android")}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all ${activeOs === "android"
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-white text-gray-500 border-gray-200 hover:border-gray-900"
                            }`}
                    >
                        <Smartphone className="w-4 h-4" />
                        <span className="font-mono font-bold">Android</span>
                    </button>
                    <button
                        onClick={() => setActiveOs("ios")}
                        className={`flex items-center gap-2 px-6 py-2 rounded-full border transition-all ${activeOs === "ios"
                            ? "bg-gray-900 text-white border-gray-900"
                            : "bg-white text-gray-500 border-gray-200 hover:border-gray-900"
                            }`}
                    >
                        <Apple className="w-4 h-4" />
                        <span className="font-mono font-bold">iOS</span>
                    </button>
                </div>

                {/* Steps */}
                <div className="grid gap-6 md:grid-cols-3">
                    {currentSteps.map((step, idx) => (
                        <div key={idx} className="bg-gray-50 p-6 rounded-2xl border border-gray-100 flex flex-col items-center text-center relative overflow-hidden group hover:border-gray-300 transition-colors">
                            <div className={`w-12 h-12 md:w-14 md:h-14 ${currentApp.iconBg} rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110`}>
                                {step.icon}
                            </div>
                            <h4 className="font-sans font-bold text-gray-900 text-lg mb-2">{step.title}</h4>
                            <p className="font-mono text-sm text-gray-500 leading-relaxed">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
