import { Facebook, Linkedin, Twitter, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-royal-ivory pt-24 pb-12 px-6 border-t border-royal-light-gray">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-3xl font-serif text-royal-black tracking-widest uppercase mb-12">
          Dr. E. D. Nkanta
        </h2>

        <div className="flex space-x-8 mb-16">
          <a href="https://www.fb.com/l/6lp1kJRRR" target="_blank" rel="noopener noreferrer" className="text-royal-gray hover:text-royal-gold transition-colors duration-300">
            <Facebook size={20} />
            <span className="sr-only">Facebook</span>
          </a>
          <a href="https://x.com/nkantaman" target="_blank" rel="noopener noreferrer" className="text-royal-gray hover:text-royal-gold transition-colors duration-300">
            <Twitter size={20} />
            <span className="sr-only">Twitter</span>
          </a>
          <a href="https://www.linkedin.com/in/dr-edidiong-nkanta-3532b6141" target="_blank" rel="noopener noreferrer" className="text-royal-gray hover:text-royal-gold transition-colors duration-300">
            <Linkedin size={20} />
            <span className="sr-only">LinkedIn</span>
          </a>
          <a href="mailto:contact@officeofnkanta.com" className="text-royal-gray hover:text-royal-gold transition-colors duration-300">
            <Mail size={20} />
            <span className="sr-only">Email</span>
          </a>
        </div>

        <div className="text-center text-royal-gray text-xs font-light tracking-wide">
          <p className="mb-2">For inquiries and business representation, please contact the Office of Dr. Nkanta.</p>
          <p>&copy; {new Date().getFullYear()} Dr. Edidiong Dominic Nkanta. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
