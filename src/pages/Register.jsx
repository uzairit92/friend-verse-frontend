
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Eye, EyeOff } from 'lucide-react';
import { toast } from 'sonner';

const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    mobile: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate registration process
    setTimeout(() => {
      if (formData.username && formData.email && formData.mobile && formData.password) {
        toast.success("Registration successful! Welcome to Friend Verse.");
        navigate('/');
      } else {
        toast.error("Please fill in all fields.");
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden py-8">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2148&q=80')`
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Register Form Container */}
      <div className="relative z-10 w-full max-w-md mx-4 animate-fade-in">
        {/* Logo */}
        <div className="text-center mb-6">
          <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-br from-emerald-400 to-emerald-600 rounded-full flex items-center justify-center shadow-lg">
            <span className="text-xl font-bold text-white">FV</span>
          </div>
          <h1 className="text-2xl font-bold text-white">Join Friend Verse</h1>
        </div>

        {/* Glassmorphism Card */}
        <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 shadow-2xl">
          <div className="text-center mb-6">
            <h2 className="text-xl font-bold text-white mb-2">Create Account</h2>
            <p className="text-emerald-100 text-sm">Connect with the global Ummah</p>
          </div>

          <form onSubmit={handleRegister} className="space-y-4">
            {/* Username Input */}
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Username
              </label>
              <Input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInputChange}
                placeholder="Choose a username"
                className="w-full bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-emerald-400 focus:ring-emerald-400/50"
                required
              />
            </div>

            {/* Email Input */}
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Email Address
              </label>
              <Input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter your email"
                className="w-full bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-emerald-400 focus:ring-emerald-400/50"
                required
              />
            </div>

            {/* Mobile Number Input */}
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Mobile Number
              </label>
              <Input
                type="tel"
                name="mobile"
                value={formData.mobile}
                onChange={handleInputChange}
                placeholder="Enter your mobile number"
                className="w-full bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-emerald-400 focus:ring-emerald-400/50"
                required
              />
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-white text-sm font-medium mb-1">
                Password
              </label>
              <div className="relative">
                <Input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  placeholder="Create a password"
                  className="w-full bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-emerald-400 focus:ring-emerald-400/50 pr-12"
                  required
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-white/60 hover:text-white transition-colors"
                >
                  {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            {/* Register Button */}
            <Button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white font-medium py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg mt-6"
            >
              {isLoading ? "Creating Account..." : "Create Account"}
            </Button>

            {/* Login Link */}
            <div className="text-center mt-4">
              <p className="text-white/80 text-sm">
                Already have an account?{' '}
                <button
                  type="button"
                  onClick={() => navigate('/login')}
                  className="text-emerald-300 hover:text-emerald-200 font-medium transition-colors"
                >
                  Sign in here
                </button>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
