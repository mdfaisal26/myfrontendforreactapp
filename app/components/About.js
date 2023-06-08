import React from "react";
import Page from "./Page";

function About() {
  return (
    <>
      <Page wide={true} title="About Us">
        <div className="container">
          <h3 className="mt-4">About Us</h3>
          <h5 className="mt-4">Welcome to MySocialNet</h5>
          <p>The premier social networking platform designed to connect individuals from around the world. Our mission is to create a space where people can come together, share their experiences, and build meaningful connections.</p>
          <h5 className="mt-4">Who We Are</h5>
          <p>At MySocialNet, we believe in the power of community. Our platform is built on the foundation of bringing people closer, fostering inclusivity, and embracing diversity. We understand that every person has a unique story to tell, and we aim to provide a platform that amplifies those voices and experiences.</p>
          <h5 class="mt-4">What We Offer</h5>
          <ul class="list-group">
            <li class="list-group-item">Connect with Friends, family, and colleagues and share updates, photos, and videos.</li>
            <li class="list-group-item">Discover diverse communities and engage in vibrant discussions centered around your interests, hobbies, or causes.</li>
            <li class="list-group-item">Stay updated with the latest news, trends, and events happening locally and globally.</li>
          </ul>
          <h5 className="mt-4">Join Us Today</h5>
          <p>We invite you to join the MySocialNet community and experience the power of connection. Sign up for free, create your profile, and start sharing your journey with the world. Whether you're looking to connect with friends, find new communities, or make a difference, MySocialNet is here to support you every step of the way.</p>
          <p>Connect. Share. Empower. Welcome to MySocialNet.</p>
        </div>
      </Page>
    </>
  );
}

export default About;
