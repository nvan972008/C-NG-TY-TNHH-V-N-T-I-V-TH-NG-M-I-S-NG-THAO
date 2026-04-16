import { motion } from "motion/react";
import { 
  Phone, 
  Mail, 
  ShieldCheck, 
  Clock, 
  Award, 
  ArrowRight, 
  Menu, 
  X,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Users,
  Globe,
  Cpu,
  Zap,
  Star
} from "lucide-react";
import { useState, useEffect } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Trang chủ", href: "#trang-chu" },
    { name: "Dịch vụ", href: "#dich-vu" },
    { name: "Ưu điểm", href: "#uu-diem" },
    { name: "Liên hệ", href: "#lien-he" },
  ];

  const services = [
    {
      title: "Vận chuyển Xe máy",
      description: "Dịch vụ bọc lót và vận chuyển xe máy chuyên nghiệp, đảm bảo không trầy xước.",
      icon: <Zap className="text-primary" size={24} />,
      image: "https://picsum.photos/seed/motorcycle-transport/600/400"
    },
    {
      title: "Hàng Hóa Chất & Chất Lỏng",
      description: "Vận chuyển an toàn các loại hóa chất, chất lỏng đóng can/phuy theo tiêu chuẩn.",
      icon: <ShieldCheck className="text-primary" size={24} />,
      image: "https://picsum.photos/seed/chemical-transport/600/400"
    },
    {
      title: "Hàng Tiêu Dùng & Đóng Thùng",
      description: "Vận chuyển số lượng lớn hàng hóa đóng thùng carton cho các đại lý, siêu thị.",
      icon: <Globe className="text-primary" size={24} />,
      image: "https://picsum.photos/seed/box-cargo/600/400"
    },
    {
      title: "Hàng Công Nghiệp & Bao Tải",
      description: "Vận chuyển nguyên chuyến hàng bao tải, nguyên liệu sản xuất công nghiệp.",
      icon: <Cpu className="text-primary" size={24} />,
      image: "https://picsum.photos/seed/industrial-cargo/600/400"
    },
    {
      title: "Vận tải Xe tải & Container",
      description: "Đội xe tải Isuzu hiện đại, hỗ trợ trung chuyển hàng hóa tận nơi linh hoạt.",
      icon: <ArrowRight className="text-primary" size={24} />,
      image: "https://picsum.photos/seed/truck-transport/600/400"
    },
    {
      title: "Bốc xếp & Kho bãi",
      description: "Dịch vụ bốc xếp chuyên nghiệp tại ga Giáp Bát, lưu kho hàng hóa an toàn.",
      icon: <Users className="text-primary" size={24} />,
      image: "https://picsum.photos/seed/warehouse-service/600/400"
    },
  ];

  const galleryImages = [
    "https://picsum.photos/seed/fb-1/800/600",
    "https://picsum.photos/seed/fb-2/800/600",
    "https://picsum.photos/seed/fb-3/800/600",
    "https://picsum.photos/seed/fb-4/800/600",
    "https://picsum.photos/seed/fb-5/800/600",
    "https://picsum.photos/seed/fb-6/800/600",
  ];

  const fleet = [
    {
      type: "Xe tải 500kg",
      payload: "500 kg",
      dims: "2.1m x 1.3m x 1.3m",
      suitable: "Hàng nhẹ, xe máy, đồ gia dụng nhỏ nội thành.",
      image: "https://picsum.photos/seed/truck-500/600/400"
    },
    {
      type: "Xe tải 1.9 Tấn",
      payload: "1,900 kg",
      dims: "4.3m x 1.8m x 1.8m",
      suitable: "Hàng hóa chất, hàng tiêu dùng, trung chuyển ga Giáp Bát.",
      image: "https://picsum.photos/seed/truck-1900/600/400"
    },
    {
      type: "Xe tải 3.5 Tấn",
      payload: "3,500 kg",
      dims: "5.2m x 2.1m x 2.1m",
      suitable: "Hàng công nghiệp, máy móc, vận tải liên tỉnh số lượng lớn.",
      image: "https://picsum.photos/seed/truck-3500/600/400"
    }
  ];

  const faqs = [
    {
      q: "Làm thế nào để nhận báo giá vận chuyển?",
      a: "Bạn có thể điền form yêu cầu trên website, gọi hotline 0986.864.824 hoặc nhắn tin qua Zalo/Facebook. Chúng tôi sẽ phản hồi trong vòng 30 phút."
    },
    {
      q: "Sông Thao có bảo hiểm hàng hóa không?",
      a: "Có, tất cả hàng hóa vận chuyển qua Sông Thao đều được cam kết bảo hiểm 100% giá trị trong trường hợp xảy ra sự cố do lỗi vận chuyển."
    },
    {
      q: "Thời gian vận chuyển từ Hà Nội đi Sài Gòn là bao lâu?",
      a: "Thông thường thời gian vận chuyển đường sắt tuyến Bắc - Nam dao động từ 3-5 ngày tùy vào loại hàng và phương thức giao nhận."
    },
    {
      q: "Tôi có thể theo dõi đơn hàng của mình không?",
      a: "Có, chúng tôi sử dụng hệ thống GPS và phần mềm quản lý hiện đại. Bạn có thể liên hệ tổng đài để được cập nhật vị trí hàng hóa thời gian thực."
    }
  ];

  const advantages = [
    {
      title: "Đội ngũ chuyên nghiệp",
      desc: "Hơn 500 nhân viên có kinh nghiệm lâu năm trong ngành vận tải đường sắt.",
      icon: <Users size={20} />,
    },
    {
      title: "Giao hàng đúng hẹn",
      desc: "Tỷ lệ giao hàng đúng thời gian cam kết đạt 98.5%, dẫn đầu thị trường.",
      icon: <Zap size={20} />,
    },
    {
      title: "Mạng lưới rộng khắp",
      desc: "Phủ sóng 63 tỉnh thành với hơn 200 điểm giao nhận trên toàn quốc.",
      icon: <Globe size={20} />,
    },
    {
      title: "Chứng nhận chất lượng",
      desc: "Đạt chứng nhận ISO 9001:2015 và nhiều giải thưởng uy tín trong ngành.",
      icon: <Award size={20} />,
    },
    {
      title: "Công nghệ hiện đại",
      desc: "Hệ thống theo dõi GPS và phần mềm quản lý logistics tiên tiến.",
      icon: <Cpu size={20} />,
    },
    {
      title: "An toàn tuyệt đối",
      desc: "Không có tai nạn nghiêm trọng trong suốt 5 năm qua.",
      icon: <ShieldCheck size={20} />,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col selection:bg-primary/20 selection:text-primary">
      {/* Top Bar */}
      <div className="hidden lg:block bg-slate-900 py-2 text-white/70 text-xs font-medium tracking-wide">
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-2">
              <MapPin size={14} className="text-primary" />
              Ga Giáp Bát - số 364 Giải Phóng, P. Định Công, TP Hà Nội
            </span>
          </div>
          <div className="flex items-center space-x-6">
            <a href="tel:0986864824" className="flex items-center gap-2 hover:text-white transition-colors">
              <Phone size={14} className="text-primary" />
              0986.864.824
            </a>
            <a href="mailto:vantaisongthao@gmail.com" className="flex items-center gap-2 hover:text-white transition-colors">
              <Mail size={14} className="text-primary" />
              vantaisongthao@gmail.com
            </a>
          </div>
        </div>
      </div>

      {/* Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-lg shadow-sm py-3" : "bg-white py-5"}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          {/* Logo */}
          <a href="/" className="flex items-center space-x-3 group">
            <div className="w-11 h-11 bg-slate-900 rounded-xl flex items-center justify-center p-1.5 transition-transform group-hover:scale-105">
              <img 
                src="https://picsum.photos/seed/train-logo-2/100/100" 
                alt="Logo" 
                className="w-full h-full object-cover rounded-lg"
                referrerPolicy="no-referrer"
              />
            </div>
            <div>
              <h1 className="font-bold text-xl leading-none tracking-tight text-slate-900">SÔNG THAO</h1>
              <p className="text-[10px] text-primary uppercase tracking-[0.2em] font-bold mt-1">Vận tải Đường sắt</p>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center space-x-10">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-semibold text-slate-600 hover:text-primary transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all group-hover:w-full"></span>
              </a>
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden md:flex items-center">
            <button className="bg-primary hover:bg-secondary text-white px-7 py-2.5 rounded-full text-sm font-bold transition-all shadow-lg shadow-primary/20 hover:shadow-primary/30 active:scale-95">
              Báo giá ngay
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden p-2 text-slate-900"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            className="md:hidden bg-white border-t border-slate-100 px-6 py-8 space-y-6 overflow-hidden"
          >
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="block text-lg font-bold text-slate-900"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <button className="w-full bg-primary text-white py-4 rounded-2xl font-bold text-lg shadow-xl shadow-primary/20">
              Nhận báo giá
            </button>
          </motion.div>
        )}
      </header>

      <main className="flex-grow">
        {/* Hero Section */}
        <section id="trang-chu" className="relative pt-16 pb-24 lg:pt-32 lg:pb-40 overflow-hidden bg-slate-50/50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
              {/* Hero Content */}
              <div className="flex-1 text-center lg:text-left z-10">
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                >
                  <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-8">
                    <Star size={14} fill="currentColor" />
                    Hơn 20 năm kinh nghiệm vận tải
                  </div>
                  <h2 className="font-display text-4xl lg:text-7xl font-[800] text-slate-900 leading-[1.1] mb-6 tracking-[-0.03em]">
                    Kết nối Việt Nam qua <span className="text-primary italic">Vận tải Đường sắt</span> Đáng tin cậy
                  </h2>
                  <p className="text-lg text-slate-600 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-medium">
                    SÔNG THAO cung cấp dịch vụ vận tải đường sắt chuyên nghiệp, 
                    an toàn và hiệu quả cho mọi nhu cầu logistics của bạn trên toàn quốc.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4">
                    <button className="w-full sm:w-auto bg-primary hover:bg-secondary text-white px-8 py-4 rounded-2xl font-black text-base flex items-center justify-center gap-3 transition-all shadow-2xl shadow-primary/30 group active:scale-95">
                      Nhận báo giá ngay
                      <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                    </button>
                    <button className="w-full sm:w-auto bg-white border-2 border-slate-200 hover:border-primary/30 hover:bg-primary/5 text-slate-900 px-8 py-4 rounded-2xl font-black text-base transition-all active:scale-95">
                      Xem dịch vụ
                    </button>
                  </div>
                </motion.div>
              </div>

              {/* Hero Image Area */}
              <div className="flex-1 relative w-full">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                  className="relative"
                >
                  <div className="aspect-[4/3] rounded-[40px] overflow-hidden shadow-[0_40px_80px_-15px_rgba(0,0,0,0.15)] border-8 border-white">
                    <img 
                      src="https://picsum.photos/seed/railway-vn-3/1200/900" 
                      alt="Railway transportation in Vietnam" 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-tr from-slate-900/20 to-transparent"></div>
                  </div>
                  
                  {/* Floating Stats Card */}
                  <motion.div
                    initial={{ opacity: 0, x: 40 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute -bottom-10 -right-6 lg:-right-12 bg-white p-8 rounded-3xl shadow-2xl border border-slate-100 z-20 max-w-[280px]"
                  >
                    <div className="flex items-center gap-5 mb-4">
                      <div className="w-14 h-14 bg-primary rounded-2xl flex items-center justify-center shadow-lg shadow-primary/30">
                        <Users className="text-white" size={28} />
                      </div>
                      <div>
                        <div className="text-3xl font-black text-slate-900 tracking-tight">10,000+</div>
                        <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Khách hàng tin tưởng</div>
                      </div>
                    </div>
                    <p className="text-sm text-slate-500 leading-relaxed font-medium">
                      Từ các doanh nghiệp nhỏ đến tập đoàn lớn, Sông Thao luôn là lựa chọn hàng đầu.
                    </p>
                  </motion.div>

                  {/* Decorative Elements */}
                  <div className="absolute -top-10 -left-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl -z-10"></div>
                  <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-primary/5 rounded-full blur-3xl -z-10"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="dich-vu" className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">Dịch vụ của chúng tôi</h2>
              <h3 className="font-display text-4xl lg:text-5xl font-[800] text-slate-900 mb-6 tracking-tight">
                Giải pháp vận tải toàn diện
              </h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                SÔNG THAO cung cấp đa dạng dịch vụ vận tải đường sắt chuyên nghiệp, 
                đáp ứng mọi nhu cầu khắt khe nhất của khách hàng.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
              {services.map((service, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="group relative bg-white rounded-[32px] overflow-hidden shadow-xl shadow-slate-200/50 border border-slate-100 transition-all duration-500"
                >
                  <div className="aspect-video overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-500">
                      {service.icon}
                    </div>
                    <h4 className="text-2xl font-black text-slate-900 mb-3 tracking-tight">{service.title}</h4>
                    <p className="text-slate-600 leading-relaxed font-medium text-sm">
                      {service.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Service Scope Section */}
        <section className="py-24 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              <div className="bg-white p-12 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:bg-primary transition-all duration-500">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-white group-hover:text-primary transition-colors">
                  <MapPin size={32} />
                </div>
                <h4 className="font-display text-3xl font-black text-slate-900 mb-6 group-hover:text-white transition-colors">Vận tải Nội thành Hà Nội</h4>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                  Dịch vụ xe tải trung chuyển linh hoạt giữa các kho bãi, ga Giáp Bát và các quận huyện nội thành Hà Nội. 
                  Giao nhận tận nơi trong ngày.
                </p>
                <ul className="space-y-4">
                  {["Giao nhận siêu tốc", "Hỗ trợ bốc xếp", "Giá cước cạnh tranh"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold group-hover:text-white transition-colors">
                      <CheckCircle2 size={18} className="text-primary group-hover:text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-12 rounded-[40px] shadow-xl shadow-slate-200/50 border border-slate-100 group hover:bg-slate-900 transition-all duration-500">
                <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-8 text-primary group-hover:bg-primary group-hover:text-white transition-colors">
                  <Globe size={32} />
                </div>
                <h4 className="font-display text-3xl font-black text-slate-900 mb-6 group-hover:text-white transition-colors">Vận tải Liên tỉnh</h4>
                <p className="text-slate-600 font-medium leading-relaxed mb-8 group-hover:text-white/80 transition-colors">
                  Kết nối vận tải đường sắt và đường bộ đi khắp 63 tỉnh thành. 
                  Chuyên tuyến Bắc - Nam với lịch trình cố định hàng ngày.
                </p>
                <ul className="space-y-4">
                  {["Phủ sóng toàn quốc", "Bảo hiểm 100%", "Theo dõi GPS 24/7"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm font-bold group-hover:text-white transition-colors">
                      <CheckCircle2 size={18} className="text-primary group-hover:text-white" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Fleet Section */}
        <section className="py-24 lg:py-32 bg-white border-t border-slate-100">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">Đội xe vận chuyển</h2>
              <h3 className="font-display text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                Đa dạng tải trọng, đáp ứng mọi nhu cầu
              </h3>
              <p className="text-lg text-slate-600 font-medium leading-relaxed">
                Hệ thống xe tải Isuzu hiện đại, hỗ trợ trung chuyển hàng hóa nội thành Hà Nội 
                và kết nối ga Giáp Bát đi khắp các tỉnh thành.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {fleet.map((truck, idx) => (
                <motion.div
                  key={idx}
                  whileHover={{ y: -10 }}
                  className="bg-slate-50 rounded-[32px] overflow-hidden border border-slate-100 transition-all duration-500"
                >
                  <div className="aspect-[4/3] overflow-hidden">
                    <img 
                      src={truck.image} 
                      alt={truck.type} 
                      className="w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="p-8">
                    <h4 className="text-2xl font-black text-slate-900 mb-4 tracking-tight">{truck.type}</h4>
                    <div className="space-y-3 mb-6">
                      <div className="flex justify-between text-sm border-b border-slate-200 pb-2">
                        <span className="text-slate-500 font-bold uppercase tracking-wider">Tải trọng</span>
                        <span className="text-slate-900 font-black">{truck.payload}</span>
                      </div>
                      <div className="flex justify-between text-sm border-b border-slate-200 pb-2">
                        <span className="text-slate-500 font-bold uppercase tracking-wider">Kích thước</span>
                        <span className="text-slate-900 font-black">{truck.dims}</span>
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed font-medium">
                      {truck.suitable}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="py-24 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
              <div className="max-w-2xl">
                <h2 className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">Hoạt động thực tế</h2>
                <h3 className="font-display text-4xl lg:text-5xl font-[800] text-slate-900 tracking-tight">
                  Hình ảnh vận chuyển trực tiếp
                </h3>
              </div>
              <button className="flex items-center gap-2 text-primary font-bold hover:gap-3 transition-all">
                Xem tất cả trên Facebook <ArrowRight size={20} />
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
              {galleryImages.map((img, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="aspect-square rounded-3xl overflow-hidden shadow-lg group cursor-pointer"
                >
                  <img 
                    src={img} 
                    alt={`Hoạt động ${idx + 1}`} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    referrerPolicy="no-referrer"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Advantages Section */}
        <section id="uu-diem" className="py-24 lg:py-32 bg-slate-900 text-white overflow-hidden relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:40px_40px]"></div>
          </div>

          <div className="container mx-auto px-6 relative z-10">
            <div className="flex flex-col lg:flex-row gap-20 items-center">
              <div className="lg:w-1/3">
                <h2 className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">Tại sao chọn Sông Thao?</h2>
                <h3 className="font-display text-4xl lg:text-5xl font-[800] mb-8 leading-tight tracking-tight">
                  Ưu điểm vượt trội trong ngành vận tải
                </h3>
                <p className="text-slate-400 text-lg mb-10 font-medium leading-relaxed">
                  Chúng tôi tự hào là đơn vị vận tải đường sắt hàng đầu Việt Nam với những cam kết vàng về chất lượng và uy tín.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                    <div className="w-12 h-12 rounded-xl bg-primary/20 flex items-center justify-center text-primary">
                      <CheckCircle2 size={24} />
                    </div>
                    <div>
                      <div className="font-bold text-lg">ISO 9001:2015</div>
                      <div className="text-xs text-slate-500 font-bold uppercase tracking-wider">Chứng nhận chất lượng</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:w-2/3 grid sm:grid-cols-2 gap-6">
                {advantages.map((adv, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center mb-6 shadow-lg shadow-primary/20">
                      {adv.icon}
                    </div>
                    <h4 className="text-xl font-bold mb-3 tracking-tight">{adv.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed font-medium">
                      {adv.desc}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-24 lg:py-32 bg-white">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center mb-20">
              <h2 className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-4">Giải đáp thắc mắc</h2>
              <h3 className="font-display text-4xl lg:text-6xl font-black text-slate-900 mb-6 tracking-tight">
                Câu hỏi thường gặp
              </h3>
            </div>

            <div className="max-w-4xl mx-auto grid gap-6">
              {faqs.map((faq, idx) => (
                <div key={idx} className="p-8 rounded-3xl bg-slate-50 border border-slate-100">
                  <h4 className="text-xl font-black text-slate-900 mb-4 tracking-tight flex items-start gap-4">
                    <span className="text-primary">Q.</span>
                    {faq.q}
                  </h4>
                  <p className="text-slate-600 leading-relaxed font-medium pl-8 border-l-2 border-primary/20">
                    {faq.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="lien-he" className="py-24 lg:py-32 bg-slate-50">
          <div className="container mx-auto px-6">
            <div className="bg-white rounded-[48px] overflow-hidden shadow-2xl shadow-slate-200/50 flex flex-col lg:flex-row">
              {/* Contact Info */}
              <div className="lg:w-2/5 bg-primary p-12 lg:p-20 text-white relative overflow-hidden">
                <div className="relative z-10">
                  <h3 className="font-display text-4xl font-black mb-10 tracking-tight">Liên hệ với chúng tôi</h3>
                  <p className="text-white/80 text-lg mb-12 font-medium leading-relaxed">
                    Sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ để nhận tư vấn và báo giá miễn phí ngay hôm nay.
                  </p>
                  
                  <div className="space-y-10">
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                        <Phone size={24} />
                      </div>
                      <div>
                        <div className="font-black text-2xl mb-1 tracking-tight">0986.864.824</div>
                        <div className="text-white/60 text-sm font-bold uppercase tracking-wider">Hỗ trợ 24/7</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                        <Mail size={24} />
                      </div>
                      <div>
                        <div className="font-black text-2xl mb-1 tracking-tight">vantaisongthao@gmail.com</div>
                        <div className="text-white/60 text-sm font-bold uppercase tracking-wider">Phản hồi trong 2h</div>
                      </div>
                    </div>
                    <div className="flex items-start gap-6">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center shrink-0">
                        <MapPin size={24} />
                      </div>
                      <div>
                        <div className="font-bold text-lg leading-snug">Ga Giáp Bát - số 364 Giải Phóng, P. Định Công, TP Hà Nội</div>
                        <div className="text-white/60 text-sm font-bold uppercase tracking-wider mt-1">Trụ sở chính</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Decorative Circles */}
                <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute top-0 right-0 w-40 h-40 bg-black/5 rounded-full blur-2xl"></div>
              </div>

              {/* Contact Form */}
              <div className="lg:w-3/5 p-12 lg:p-20">
                <h4 className="font-display text-3xl font-black text-slate-900 mb-4 tracking-tight">Nhận báo giá chi tiết</h4>
                <p className="text-slate-500 mb-10 font-medium">
                  Điền thông tin để nhận báo giá chi tiết trong vòng 30 phút.
                </p>
                
                <form className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Họ và tên</label>
                      <input 
                        type="text" 
                        placeholder="Nguyễn Văn A" 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-medium"
                      />
                    </div>
                    <div className="space-y-2">
                      <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Số điện thoại</label>
                      <input 
                        type="tel" 
                        placeholder="09xx xxx xxx" 
                        className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-medium"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Email</label>
                    <input 
                      type="email" 
                      placeholder="example@gmail.com" 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-medium"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold uppercase tracking-widest text-slate-400 ml-1">Nhu cầu vận chuyển</label>
                    <textarea 
                      rows={4} 
                      placeholder="Mô tả hàng hóa, điểm đi, điểm đến..." 
                      className="w-full px-6 py-4 rounded-2xl bg-slate-50 border-2 border-transparent focus:border-primary/20 focus:bg-white transition-all outline-none font-medium resize-none"
                    ></textarea>
                  </div>
                  <button className="w-full bg-slate-900 hover:bg-black text-white py-5 rounded-2xl font-black text-lg transition-all shadow-xl shadow-slate-900/20 active:scale-[0.98]">
                    Gửi yêu cầu báo giá
                  </button>
                  <p className="text-[10px] text-center text-slate-400 font-medium uppercase tracking-wider">
                    Bằng cách gửi form, bạn đồng ý với Chính sách bảo mật của chúng tôi
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-slate-950 text-white pt-24 pb-12">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-4 gap-16 mb-20">
            <div className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-8">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center p-1.5">
                  <img 
                    src="https://picsum.photos/seed/train-logo-2/100/100" 
                    alt="Logo" 
                    className="w-full h-full object-cover rounded-lg"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h1 className="font-bold text-xl leading-none tracking-tight">SÔNG THAO</h1>
              </div>
              <p className="text-slate-400 font-medium leading-relaxed mb-8">
                Đơn vị vận tải đường sắt hàng đầu Việt Nam với hơn 20 năm kinh nghiệm, cam kết mang đến dịch vụ chất lượng cao nhất.
              </p>
              <div className="flex gap-4">
                {[1, 2, 3, 4].map(i => (
                  <div key={i} className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center hover:bg-primary hover:text-white transition-all cursor-pointer">
                    <Globe size={18} />
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h5 className="font-black text-sm uppercase tracking-[0.2em] mb-8 text-primary">Dịch vụ</h5>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Vận tải hàng hóa</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Logistics tổng thể</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Vận chuyển liên tỉnh</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tư vấn chuyên nghiệp</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Kho bãi</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-sm uppercase tracking-[0.2em] mb-8 text-primary">Công ty</h5>
              <ul className="space-y-4 text-slate-400 font-medium">
                <li><a href="#" className="hover:text-white transition-colors">Giới thiệu</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tin tức</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Tuyển dụng</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Chính sách</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Điều khoản</a></li>
              </ul>
            </div>

            <div>
              <h5 className="font-black text-sm uppercase tracking-[0.2em] mb-8 text-primary">Liên hệ</h5>
              <ul className="space-y-6 text-slate-400 font-medium">
                <li className="flex gap-4">
                  <MapPin size={20} className="text-primary shrink-0" />
                  <span>Ga Giáp Bát - số 364 Giải Phóng, P. Định Công, TP Hà Nội</span>
                </li>
                <li className="flex gap-4">
                  <Phone size={20} className="text-primary shrink-0" />
                  <span>0986.864.824</span>
                </li>
                <li className="flex gap-4">
                  <Mail size={20} className="text-primary shrink-0" />
                  <span>vantaisongthao@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-12 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-slate-500 font-bold uppercase tracking-widest">
            <p>© 2024 VẬN TẢI ĐƯỜNG SẮT SÔNG THAO. ALL RIGHTS RESERVED.</p>
            <div className="flex gap-8">
              <a href="#" className="hover:text-white transition-colors">Chính sách bảo mật</a>
              <a href="#" className="hover:text-white transition-colors">Điều khoản</a>
              <a href="#" className="hover:text-white transition-colors">Sitemap</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
