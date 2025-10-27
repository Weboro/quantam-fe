"use client";

import { MapPin, Navigation, Train, Bus, ShoppingBag } from "lucide-react";

export default function CampusMap() {
  const accent = "#78256f";

  const handleGetDirections = () => {
    const address = "Level+4,+16-18+Wentworth+Street,+Parramatta+NSW+2150";
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${address}`,
      "_blank"
    );
  };

  return (
    <div
      className="w-full bg-white rounded-md border border-gray-200"
      style={{ borderColor: `${accent}1A` }}
    >
      <div className="flex flex-col md:flex-row">
        {/* Map Section */}
        <div className="md:w-1/2 w-full p-4 border-b md:border-b-0 md:border-r" style={{ borderColor: `${accent}1A` }}>
          <div
            className="aspect-video rounded-md overflow-hidden border"
            style={{ borderColor: `${accent}1A` }}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.347292299362!2d151.0058127764788!3d-33.81624107323711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a43e47b5b8a5%3A0x7a8a6d9e8b5b5b5b!2s16-18%20Wentworth%20St%2C%20Parramatta%20NSW%202150!5e0!3m2!1sen!2sau!4v1698765432100!5m2!1sen!2sau"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="QIHE Campus Location - Parramatta"
            />
          </div>
        </div>

        {/* Info Section */}
        <div className="md:w-1/2 w-full p-6 flex flex-col justify-between">
          {/* Location Info */}
          <div className="text-left mb-6">
            <div className="flex items-start gap-3 mb-3">
              <div
                className="w-10 h-10 flex items-center justify-center rounded-full"
                style={{ backgroundColor: `${accent}0F` }}
              >
                <MapPin className="h-5 w-5" style={{ color: accent }} />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 text-base">
                  QIHE Campus Location
                </h3>
                <p className="text-gray-800 text-sm font-medium">
                  Level 4, 16-18 Wentworth Street
                </p>
                <p className="text-gray-600 text-sm">Parramatta NSW 2150</p>
              </div>
            </div>

            <button
              onClick={handleGetDirections}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-white text-sm"
              style={{ backgroundColor: accent }}
            >
              <Navigation className="h-4 w-4" />
              Get Directions
            </button>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
            <div
              className="text-center p-3 rounded-md border"
              style={{ borderColor: `${accent}1A` }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                style={{ backgroundColor: `${accent}0F` }}
              >
                <Train className="h-5 w-5" style={{ color: accent }} />
              </div>
              <h4 className="font-medium text-gray-900 text-sm mb-1">
                Train Access
              </h4>
              <p className="text-xs text-gray-600">
                5 min walk from Parramatta Station
              </p>
            </div>

            <div
              className="text-center p-3 rounded-md border"
              style={{ borderColor: `${accent}1A` }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                style={{ backgroundColor: `${accent}0F` }}
              >
                <Bus className="h-5 w-5" style={{ color: accent }} />
              </div>
              <h4 className="font-medium text-gray-900 text-sm mb-1">Bus Hub</h4>
              <p className="text-xs text-gray-600">Multiple routes nearby</p>
            </div>

            <div
              className="text-center p-3 rounded-md border"
              style={{ borderColor: `${accent}1A` }}
            >
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center mx-auto mb-2"
                style={{ backgroundColor: `${accent}0F` }}
              >
                <ShoppingBag className="h-5 w-5" style={{ color: accent }} />
              </div>
              <h4 className="font-medium text-gray-900 text-sm mb-1">
                Shopping
              </h4>
              <p className="text-xs text-gray-600">
                Close to Westfield Parramatta
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
