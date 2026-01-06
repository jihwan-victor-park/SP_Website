export default function Founders() {
  return (
    <section className="section-container bg-gradient-to-b from-navy via-dark-navy to-navy">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
          Meet Our Founders
        </h2>
        <div className="w-24 h-1 bg-gradient-to-r from-gold to-yellow-500 mx-auto shadow-lg shadow-gold/50"></div>
      </div>

      <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
        {/* Jihwan Park */}
        <div className="bg-gradient-to-br from-dark-navy to-dark-blue rounded-2xl p-8 shadow-2xl hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-2 border border-dark-blue">
          <div className="w-48 h-48 bg-gradient-to-br from-dark-blue to-medium-blue rounded-full mx-auto mb-6 overflow-hidden border-4 border-gold/30">
            {/* Placeholder for photo - replace with actual image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              Photo of Jihwan Park
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 text-center">
            Jihwan Park
          </h3>
          <p className="text-gold font-semibold mb-4 text-center">
            EECS Student
          </p>
          <p className="text-gray-300 leading-relaxed text-center">
            Jihwan brings technical excellence and analytical thinking to
            college application consulting. With a background in Electrical
            Engineering and Computer Science, he specializes in helping students
            showcase their STEM achievements and craft compelling narratives
            that stand out to top universities.
          </p>
        </div>

        {/* Winslow Solomon */}
        <div className="bg-gradient-to-br from-dark-navy to-dark-blue rounded-2xl p-8 shadow-2xl hover:shadow-gold/20 transition-all duration-300 transform hover:-translate-y-2 border border-dark-blue">
          <div className="w-48 h-48 bg-gradient-to-br from-dark-blue to-medium-blue rounded-full mx-auto mb-6 overflow-hidden border-4 border-gold/30">
            {/* Placeholder for photo - replace with actual image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400 text-sm">
              Photo of Winslow Solomon
            </div>
          </div>
          <h3 className="text-2xl font-bold text-white mb-2 text-center">
            Winslow Solomon
          </h3>
          <p className="text-gold font-semibold mb-4 text-center">
            Philosophy & Physics Student
          </p>
          <p className="text-gray-300 leading-relaxed text-center">
            Winslow combines philosophical depth with scientific rigor in his
            approach to college consulting. His expertise in Philosophy and
            Physics enables him to help students develop profound, well-reasoned
            essays that demonstrate critical thinking and intellectual
            curiosity.
          </p>
        </div>
      </div>
    </section>
  );
}
