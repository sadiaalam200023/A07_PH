"use client";

import LoginForm from "../components/LoginForm";



export default function LoginPage() {
  return (
    <div>
       <h1>সাইন ইন</h1>
       <p>বিস্তারিত দাম, বাজার তুলনা ও প্রোফাইল দেখতে অ্যাকাউন্টে ঢুকুন।</p>
       <LoginForm/>
       <p>← হোম পেজে ফিরে যান</p>
    </div>
  );
}