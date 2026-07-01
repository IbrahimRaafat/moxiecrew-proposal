import { useState } from "react";
import { X } from "lucide-react";

interface LighthouseModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const MetricBar = ({ label, value, max = 100 }: { label: string; value: number; max?: number }) => {
  const percentage = (value / max) * 100;
  const getColor = () => {
    if (percentage >= 90) return "bg-green-500";
    if (percentage >= 50) return "bg-orange-500";
    return "bg-red-500";
  };

  return (
    <div className="mb-4">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-primary">{label}</span>
        <span className="text-sm font-bold text-primary">{value}</span>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-2">
        <div className={`${getColor()} h-2 rounded-full`} style={{ width: `${percentage}%` }} />
      </div>
    </div>
  );
};

export default function LighthouseModal({ isOpen, onClose }: LighthouseModalProps) {
  const [activeTab, setActiveTab] = useState<"mobile" | "desktop">("mobile");

  if (!isOpen) return null;

  const mobileData = {
    Performance: 46,
    Accessibility: 87,
    "Best Practices": 92,
    SEO: 92,
    "Core Web Vitals": {
      FCP: "4.4 s",
      LCP: "24.1 s",
      TBT: "460 ms",
      CLS: "0",
      SI: "9.5 s",
    },
  };

  const desktopData = {
    Performance: 55,
    Accessibility: 92,
    "Best Practices": 77,
    SEO: 92,
    "Core Web Vitals": {
      FCP: "0.6 s",
      LCP: "2.3 s",
      TBT: "210 ms",
      CLS: "0.719",
      SI: "1.7 s",
    },
  };

  const currentData = activeTab === "mobile" ? mobileData : desktopData;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto">
        {/* Header */}
        <div className="sticky top-0 bg-white border-b border-gray-200 p-6 flex justify-between items-center">
          <h2 className="font-display text-2xl font-bold text-primary">Lighthouse Audit Results</h2>
          <button
            onClick={onClose}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Tabs */}
        <div className="border-b border-gray-200 p-6 flex gap-4">
          <button
            onClick={() => setActiveTab("mobile")}
            className={`px-4 py-2 font-semibold rounded-lg transition-all ${
              activeTab === "mobile"
                ? "bg-primary text-white"
                : "bg-gray-100 text-primary hover:bg-gray-200"
            }`}
          >
            Mobile
          </button>
          <button
            onClick={() => setActiveTab("desktop")}
            className={`px-4 py-2 font-semibold rounded-lg transition-all ${
              activeTab === "desktop"
                ? "bg-primary text-white"
                : "bg-gray-100 text-primary hover:bg-gray-200"
            }`}
          >
            Desktop
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {/* Main Metrics */}
          <div className="mb-8">
            <h3 className="font-display text-lg font-bold text-primary mb-6">Performance Metrics</h3>
            <MetricBar label="Performance" value={currentData.Performance} />
            <MetricBar label="Accessibility" value={currentData.Accessibility} />
            <MetricBar label="Best Practices" value={currentData["Best Practices"]} />
            <MetricBar label="SEO" value={currentData.SEO} />
          </div>

          {/* Core Web Vitals */}
          <div>
            <h3 className="font-display text-lg font-bold text-primary mb-4">Core Web Vitals</h3>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs font-semibold text-muted uppercase mb-2">FCP</p>
                <p className="text-2xl font-bold text-primary">{currentData["Core Web Vitals"].FCP}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs font-semibold text-muted uppercase mb-2">LCP</p>
                <p className="text-2xl font-bold text-primary">{currentData["Core Web Vitals"].LCP}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs font-semibold text-muted uppercase mb-2">TBT</p>
                <p className="text-2xl font-bold text-primary">{currentData["Core Web Vitals"].TBT}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-xs font-semibold text-muted uppercase mb-2">CLS</p>
                <p className="text-2xl font-bold text-primary">{currentData["Core Web Vitals"].CLS}</p>
              </div>
              <div className="bg-gray-50 p-4 rounded-lg col-span-2">
                <p className="text-xs font-semibold text-muted uppercase mb-2">SI (Speed Index)</p>
                <p className="text-2xl font-bold text-primary">{currentData["Core Web Vitals"].SI}</p>
              </div>
            </div>
          </div>

          {/* Footer Info */}
          <div className="mt-8 pt-6 border-t border-gray-200 text-center">
            <p className="text-xs text-muted">
              Captured at Jun 30, 2026, 1:41 AM GMT+2
            </p>
            <p className="text-xs text-muted mt-1">
              Emulated {activeTab === "mobile" ? "Moto G Power" : "Desktop"} with Lighthouse 13.4.0
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
