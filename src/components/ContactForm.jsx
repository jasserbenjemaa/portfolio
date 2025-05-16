
import React, { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import { Send } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));

    console.log("Form data submitted:", formData);
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out. I'll get back to you shortly.",
      variant: "default",
      className: "bg-primary text-primary-foreground",
    });
    setFormData({ name: "", email: "", message: "" });
    setIsSubmitting(false);
  };

  const inputClass = "w-full px-4 py-3 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary bg-background text-foreground placeholder:text-muted-foreground/70";

  return (
    <motion.form
      onSubmit={handleSubmit}
      className="space-y-6"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1 text-muted-foreground">
          Your Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="John Doe"
        />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1 text-muted-foreground">
          Your Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className={inputClass}
          placeholder="john.doe@example.com"
        />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1 text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows="5"
          className={inputClass}
          placeholder="Hi John, I'd like to discuss..."
        ></textarea>
      </div>
      <Button
        type="submit"
        variant="outline"
        size="lg"
        className="font-mono text-primary border-primary hover:bg-primary/10 w-full md:w-auto"
        disabled={isSubmitting}
      >
        {isSubmitting ? (
          "Sending..."
        ) : (
          <>
            Send Message <Send size={18} className="ml-2" />
          </>
        )}
      </Button>
    </motion.form>
  );
};

export default ContactForm;
