"use client";

import { MapPin, Navigation, Train, Bus, ShoppingBag } from "lucide-react";

export default function CampusMap() {
  const handleGetDirections = () => {
    const address = "Level+4,+16-18+Wentworth+Street,+Parramatta+NSW+2150";
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${address}`,
      "_blank"
    );
  };

  return (
    <div className="w-full bg-white rounded-lg border border-gray-200 shadow-sm">
      <div className="p-6">
        <div className="aspect-video bg-gray-100 rounded-lg border-2 border-gray-300 overflow-hidden mb-6">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3313.347292299362!2d151.0058127764788!3d-33.81624107323711!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12a43e47b5b8a5%3A0x7a8a6d9e8b5b5b5b!2s16-18%20Wentworth%20St%2C%20Parramatta%20NSW%202150!5e0!3m2!1sen!2sau!4v1698765432100!5m2!1sen!2sau"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="QIHE Campus Location - Parramatta"
            className="w-full h-full"
          />
        </div>
        <div className="text-center mb-6">
          <div className="flex items-center justify-center gap-2 mb-3">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
              <MapPin className="h-6 w-6 text-blue-600" />
            </div>
            <div className="text-left">
              <h3 className="font-bold text-gray-900 text-lg">
                QIHE Campus Location
              </h3>
              <p className="text-gray-700 font-medium">
                Level 4, 16-18 Wentworth Street
              </p>
              <p className="text-gray-600">Parramatta NSW 2150</p>
            </div>
          </div>
          <button
            onClick={handleGetDirections}
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700 transition-colors shadow-md"
          >
            <Navigation className="h-5 w-5" />
            Get Directions
          </button>
        </div>

        {/* Location Features */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-green-50 rounded-lg border border-green-200">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Train className="h-6 w-6 text-green-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Train Access</h4>
            <p className="text-xs text-gray-600">
              5 min walk from Parramatta Station
            </p>
          </div>
          <div className="text-center p-4 bg-purple-50 rounded-lg border border-purple-200">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Bus className="h-6 w-6 text-purple-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Bus Hub</h4>
            <p className="text-xs text-gray-600">Multiple routes nearby</p>
          </div>
          <div className="text-center p-4 bg-orange-50 rounded-lg border border-orange-200">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <ShoppingBag className="h-6 w-6 text-orange-600" />
            </div>
            <h4 className="font-semibold text-gray-900 mb-1">Shopping</h4>
            <p className="text-xs text-gray-600">
              Close to Westfield Parramatta
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
