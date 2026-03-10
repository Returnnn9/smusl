"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, Mail, Lock, User, ArrowRight, Loader2, Eye, EyeOff } from "lucide-react";
import { useUIStore, useUserStore, useStoreData } from "@/store/hooks";

// --- Local user store (localStorage) ---
interface LocalUser { name: string; email: string; passwordHash: string; }

function hashPassword(password: string): string {
 // Simple deterministic hash for demo purposes (not cryptographically secure)
 let hash = 0;
 for (let i = 0; i < password.length; i++) {
  const char = password.charCodeAt(i);
  hash = ((hash << 5) - hash) + char;
  hash = hash & hash;
 }
 return hash.toString(36) + password.length.toString(36);
}

function getUsers(): LocalUser[] {
 try {
  const raw = localStorage.getItem("smuslest_users");
  return raw ? JSON.parse(raw) : [];
 } catch { return []; }
}

function saveUsers(users: LocalUser[]) {
 localStorage.setItem("smuslest_users", JSON.stringify(users));
}

// ----------------------------------------

const LoginModal: React.FC = () => {
 const uiStore = useUIStore();
 const userStore = useUserStore();

 const isAuthModalOpen = useStoreData(uiStore, s => s.getIsAuthModalOpen());
 const setAuthModalOpen = (open: boolean) => uiStore.setAuthModalOpen(open);
 const setUserName = (name: string) => userStore.setUserName(name);

 const [isLogin, setIsLogin] = useState(true);
 const [isLoading, setIsLoading] = useState(false);
 const [error, setError] = useState("");
 const [showPass, setShowPass] = useState(false);

 const [formData, setFormData] = useState({ email: "", password: "", name: "" });

 if (!isAuthModalOpen) return null;

 const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setError("");
  setIsLoading(true);

  // Simulate slight delay for UX
  await new Promise(r => setTimeout(r, 500));

  try {
   if (isLogin) {
    // ── Login ──
    const users = getUsers();
    const user = users.find(u => u.email.toLowerCase() === formData.email.toLowerCase());
    if (!user) {
     setError("Пользователь с таким email не найден");
     return;
    }
    if (user.passwordHash !== hashPassword(formData.password)) {
     setError("Неверный пароль");
     return;
    }
    // Success: mark as logged in
    localStorage.setItem("smuslest_session", JSON.stringify({ name: user.name, email: user.email }));
    setUserName(user.name);
    setAuthModalOpen(false);
    window.location.href = "/profile";
   } else {
    // ── Register ──
    if (formData.name.trim().length < 2) {
     setError("Введите ваше имя (минимум 2 символа)");
     return;
    }
    if (!formData.email.includes("@")) {
     setError("Введите корректный email");
     return;
    }
    if (formData.password.length < 4) {
     setError("Пароль должен быть не менее 4 символов");
     return;
    }
    const users = getUsers();
    if (users.find(u => u.email.toLowerCase() === formData.email.toLowerCase())) {
     setError("Пользователь с таким email уже зарегистрирован");
     return;
    }
    const newUser: LocalUser = {
     name: formData.name.trim(),
     email: formData.email.toLowerCase(),
     passwordHash: hashPassword(formData.password),
    };
    saveUsers([...users, newUser]);
    // Auto login
    localStorage.setItem("smuslest_session", JSON.stringify({ name: newUser.name, email: newUser.email }));
    setUserName(newUser.name);
    setAuthModalOpen(false);
    window.location.href = "/profile";
   }
  } catch {
   setError("Что-то пошло не так, попробуйте ещё раз");
  } finally {
   setIsLoading(false);
  }
 };

 const GoogleIcon = () => (
  <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
   <path fill="#EA4335" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
   <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
   <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" />
   <path fill="#4285F4" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
  </svg>
 );

 return (
  <AnimatePresence>
   <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 overflow-y-auto">
    <motion.div
     initial={{ opacity: 0 }}
     animate={{ opacity: 1 }}
     exit={{ opacity: 0 }}
     onClick={() => setAuthModalOpen(false)}
     className="fixed inset-0 bg-[#3A332E]/60"
    />

    <motion.div
     initial={{ opacity: 0, scale: 0.9, y: 20 }}
     animate={{ opacity: 1, scale: 1, y: 0 }}
     exit={{ opacity: 0, scale: 0.9, y: 20 }}
     className="relative w-full max-w-[440px] bg-white rounded-[40px] shadow-2xl overflow-hidden border border-white/20 my-auto"
    >
     <button
      onClick={() => setAuthModalOpen(false)}
      className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#4A403A]/5 transition-colors z-10"
     >
      <X className="w-5 h-5 text-[#4A403A]/60" />
     </button>

     <div className="p-8 sm:p-10 pt-12">
      {/* Header */}
      <div className="text-center mb-8">
       <div className="w-14 h-14 rounded-2xl bg-smusl-terracotta/10 flex items-center justify-center mx-auto mb-4">
        <User className="w-7 h-7 text-smusl-terracotta" />
       </div>
       <h2 className="text-2xl sm:text-3xl font-bold text-[#4A403A] mb-1.5">
        {isLogin ? "С возвращением" : "Регистрация"}
       </h2>
       <p className="text-[#4A403A]/50 text-sm">
        {isLogin ? "Войдите в свой аккаунт" : "Создайте аккаунт — это бесплатно"}
       </p>
      </div>

      {/* Google button (visual only — real OAuth requires server) */}
      <button
       type="button"
       disabled
       className="w-full flex items-center justify-center gap-3 py-3.5 bg-white border-2 border-[#EBEBEB] rounded-2xl font-bold text-[14px] text-[#4A403A]/40 cursor-not-allowed mb-3"
      >
       <GoogleIcon />
       <span>Продолжить через Google</span>
       <span className="text-[11px] font-normal ml-1">(скоро)</span>
      </button>

      {/* Apple button (visual only — real OAuth requires server) */}
      <button
       type="button"
       disabled
       className="w-full flex items-center justify-center gap-3 py-3.5 bg-black border-2 border-black rounded-2xl font-bold text-[14px] text-[#A1A1A1] cursor-not-allowed mb-6"
      >
       <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="text-[#A1A1A1]">
        <path d="M16.364 12.879c-.024-2.585 2.112-3.83 2.208-3.886-1.206-1.763-3.078-2.002-3.744-2.032-1.587-.16-3.096.936-3.912.936-.816 0-2.064-.912-3.384-.888-1.728.024-3.324.996-4.212 2.544-1.812 3.132-.468 7.764 1.308 10.32 .864 1.248 1.908 2.652 3.252 2.604 1.296-.048 1.788-.828 3.324-.828 1.524 0 1.98.828 3.336.804 1.404-.024 2.292-1.272 3.144-2.52.984-1.44 1.392-2.832 1.416-2.904-.036-.012-2.712-1.044-2.736-4.152zM14.904 8.783c.708-.852 1.188-2.04 1.056-3.216-1.008.036-2.256.672-2.988 1.536-.576.66-1.152 1.884-.996 3.036 1.128.084 2.22-.552 2.928-1.356z" />
       </svg>
       <span>Продолжить через Apple</span>
       <span className="text-[11px] font-normal ml-1">(скоро)</span>
      </button>

      <div className="relative mb-6 text-center">
       <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-[#4A403A]/10" />
       </div>
       <span className="relative px-4 bg-white text-[#4A403A]/40 text-xs font-bold uppercase tracking-widest">
        или через почту
       </span>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-3">
       {!isLogin && (
        <div className="relative group">
         <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A403A]/30 group-focus-within:text-smusl-terracotta transition-colors" />
         <input
          type="text"
          placeholder="Ваше имя"
          required
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="w-full pl-12 pr-6 py-4 rounded-2xl bg-[#4A403A]/5 border-2 border-transparent focus:border-smusl-terracotta/30 focus:bg-white transition-all outline-none text-[#4A403A] font-medium placeholder:text-[#4A403A]/30"
         />
        </div>
       )}

       <div className="relative group">
        <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A403A]/30 group-focus-within:text-smusl-terracotta transition-colors" />
        <input
         type="email"
         placeholder="Email"
         required
         value={formData.email}
         onChange={(e) => setFormData({ ...formData, email: e.target.value })}
         className="w-full pl-12 pr-6 py-4 rounded-2xl bg-[#4A403A]/5 border-2 border-transparent focus:border-smusl-terracotta/30 focus:bg-white transition-all outline-none text-[#4A403A] font-medium placeholder:text-[#4A403A]/30"
        />
       </div>

       <div className="relative group">
        <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#4A403A]/30 group-focus-within:text-smusl-terracotta transition-colors" />
        <input
         type={showPass ? "text" : "password"}
         placeholder="Пароль"
         required
         value={formData.password}
         onChange={(e) => setFormData({ ...formData, password: e.target.value })}
         className="w-full pl-12 pr-12 py-4 rounded-2xl bg-[#4A403A]/5 border-2 border-transparent focus:border-smusl-terracotta/30 focus:bg-white transition-all outline-none text-[#4A403A] font-medium placeholder:text-[#4A403A]/30"
        />
        <button
         type="button"
         onClick={() => setShowPass(!showPass)}
         className="absolute right-4 top-1/2 -translate-y-1/2 text-[#4A403A]/30 hover:text-smusl-terracotta transition-colors"
        >
         {showPass ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
        </button>
       </div>

       {error && (
        <motion.p
         initial={{ opacity: 0, y: -4 }}
         animate={{ opacity: 1, y: 0 }}
         className="text-red-500 text-[13px] font-bold text-center py-2 px-4 bg-red-50 rounded-xl border border-red-100"
        >
         {error}
        </motion.p>
       )}

       <button
        type="submit"
        disabled={isLoading}
        className="w-full py-4 bg-smusl-terracotta text-white rounded-2xl font-bold flex items-center justify-center gap-2 hover:bg-[#b87a60] transition-all transform active:scale-[0.98] disabled:opacity-60 shadow-xl shadow-smusl-terracotta/20 mt-2"
       >
        {isLoading ? (
         <Loader2 className="w-5 h-5 animate-spin" />
        ) : (
         <>
          <span>{isLogin ? "Войти" : "Создать аккаунт"}</span>
          <ArrowRight className="w-5 h-5" />
         </>
        )}
       </button>
      </form>

      <div className="mt-6 text-center text-sm font-medium">
       <span className="text-[#4A403A]/40">
        {isLogin ? "Нет аккаунта? " : "Уже есть аккаунт? "}
       </span>
       <button
        onClick={() => { setIsLogin(!isLogin); setError(""); setFormData({ email: "", password: "", name: "" }); }}
        className="text-smusl-terracotta hover:underline font-bold"
       >
        {isLogin ? "Регистрация" : "Войти"}
       </button>
      </div>
     </div>
    </motion.div>
   </div>
  </AnimatePresence>
 );
};

export default LoginModal;
