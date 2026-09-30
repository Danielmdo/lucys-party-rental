export const business = {
  name: "Lucy's Party Rental LLC",
  shortName: "Lucy's Party Rental",
  phone: '(434) 981-5267',
  phoneHref: 'tel:+14349815267',
  whatsapp: 'https://wa.me/14349815267',
  whatsappMessage: (text) =>
    `https://wa.me/14349815267?text=${encodeURIComponent(text)}`,
  address: '16 Pharsalia Rd, Massies Mill, VA 22967',
  mapsEmbed:
    "https://www.google.com/maps?q=Lucy%E2%80%99s+Party+Rental+LLC,+16+Pharsalia+Rd,+Massies+Mill,+VA+22967&output=embed",
  mapsLink: 'https://maps.app.goo.gl/VvLpsWwdJRKArAuv8',
  hours: 'Lunes a Domingo · 7:00 am – 7:30 pm',
}
