
import React from 'react';

const BookingForm = () => {
  return (
    <section id="agendar-valoracion" className="py-16 bg-lilac-50 scroll-mt-24 border-y border-lilac-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-lilac-100">
          <div className="text-center mb-10">
            <h3 className="text-3xl font-serif font-bold text-lilac-700 mb-4">Agenda tu cita ahora</h3>
            <p className="text-gray-600 max-w-xl mx-auto">
              Déjanos tus datos a continuación y nuestro equipo se pondrá en contacto contigo a la brevedad para confirmar tu espacio.
            </p>
          </div>
          
          <div className="relative min-h-[500px]">
            <iframe
                src="https://api.leadconnectorhq.com/widget/form/KNYOq9B7T6jHGvHkhrBN"
                style={{ width: '100%', height: '100%', border: 'none', borderRadius: '3px', minHeight: '492px' }}
                id="inline-KNYOq9B7T6jHGvHkhrBN" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form Marlene"
                data-height="492"
                data-layout-iframe-id="inline-KNYOq9B7T6jHGvHkhrBN"
                data-form-id="KNYOq9B7T6jHGvHkhrBN"
                title="Form Marlene"
            >
            </iframe>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingForm;
