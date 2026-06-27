"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function OnlineRegistration() {
  const [formData, setFormData] = useState({
    fullName: "",
    fatherName: "",
    motherName: "",
    emailAddress: "",
    mobile: "",
    dateOfBirth: "",
    addressLine1: "",
    cityDistrict: "",
    state: "",
    studentClass: "10th High School"
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    try {
      const res = await fetch('/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await res.json();
      if (data.success) {
        setSuccess(true);
        setFormData({
          fullName: "",
          fatherName: "",
          motherName: "",
          emailAddress: "",
          mobile: "",
          dateOfBirth: "",
          addressLine1: "",
          cityDistrict: "",
          state: "",
          studentClass: "10th High School"
        });
      } else {
        alert("Registration failed: " + data.message);
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred during registration.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main>
      <Header />

      {/* Page Hero - Notice screenshot shows Check Result, keeping that for exact UI match */}
      <div className="page-hero">
        <h1 className="page-hero-title">Check Result</h1>
        <div className="page-hero-breadcrumb">
          <Link href="/">HOME</Link>
          <span>&gt;</span>
          <span className="active">CHECK RESULT</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="registration-container">
        <h2 className="registration-title">Online Registration</h2>
        
        <form onSubmit={handleSubmit}>
          <div className="reg-form-group">
            <div className="reg-form-label">Full Name *</div>
            <input 
              type="text" 
              name="fullName" 
              value={formData.fullName} 
              onChange={handleChange} 
              required 
              className="reg-form-input" 
              placeholder="e.g. John Doe"
            />
          </div>

          <div className="reg-form-group">
            <div className="reg-form-label">Father Name *</div>
            <input 
              type="text" 
              name="fatherName" 
              value={formData.fatherName} 
              onChange={handleChange} 
              required 
              className="reg-form-input" 
              placeholder="Enter father's name"
            />
          </div>

          <div className="reg-form-group">
            <div className="reg-form-label">Mother Name *</div>
            <input 
              type="text" 
              name="motherName" 
              value={formData.motherName} 
              onChange={handleChange} 
              required 
              className="reg-form-input" 
              placeholder="Enter mother's name"
            />
          </div>

          <div className="reg-form-group">
            <div className="reg-form-label">Email Address *</div>
            <input 
              type="email" 
              name="emailAddress" 
              value={formData.emailAddress} 
              onChange={handleChange} 
              required 
              className="reg-form-input" 
              placeholder="e.g. user@example.com"
            />
          </div>

          <div className="reg-form-group">
            <div className="reg-form-label">Mobile *</div>
            <input 
              type="tel" 
              name="mobile" 
              value={formData.mobile} 
              onChange={handleChange} 
              required 
              className="reg-form-input" 
              placeholder="e.g. 9876543210"
            />
          </div>

          <div className="reg-form-group">
            <div className="reg-form-label">Date Of Birth</div>
            <input 
              type="date" 
              name="dateOfBirth" 
              value={formData.dateOfBirth} 
              onChange={handleChange} 
              required 
              className="reg-form-input" 
              style={{flex: 'none', width: '200px'}}
            />
          </div>

          <div className="reg-form-group" style={{alignItems: 'flex-start'}}>
            <div className="reg-form-label">Full Address</div>
            <div style={{flex: 1, display: 'flex', flexDirection: 'column', gap: '15px'}}>
              <input 
                type="text" 
                name="addressLine1" 
                value={formData.addressLine1} 
                onChange={handleChange} 
                required 
                className="reg-form-input" 
                placeholder="Street address, P.O. box, or locality"
              />
              <div className="reg-form-row">
                <input 
                  type="text" 
                  name="cityDistrict" 
                  value={formData.cityDistrict} 
                  onChange={handleChange} 
                  required 
                  className="reg-form-input" 
                  placeholder="City or District"
                />
                <input 
                  type="text" 
                  name="state" 
                  value={formData.state} 
                  onChange={handleChange} 
                  required 
                  className="reg-form-input" 
                  placeholder="State"
                />
              </div>
            </div>
          </div>

          <div className="reg-form-group">
            <div className="reg-form-label">Class</div>
            <select 
              name="studentClass" 
              value={formData.studentClass} 
              onChange={handleChange} 
              required 
              className="reg-form-input"
            >
              <option value="10th High School">10th High School</option>
              <option value="11th Intermediate">11th Intermediate</option>
              <option value="12th Arts">12th Arts</option>
              <option value="12th Science">12th Science</option>
            </select>
          </div>

          <div style={{ clear: 'both' }}>
            <button type="submit" disabled={loading} className="submit-btn">
              {loading ? 'SUBMITTING...' : 'SUBMIT'}
            </button>
          </div>
          
          {success && (
            <div className="success-message">
              Registered successfully
            </div>
          )}
        </form>
      </div>

      <Footer />
    </main>
  );
}
