export default function Privacy() {
  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">Privacy Policy</h1>
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">1. Information Collection</h2>
            <p className="text-gray-700 mb-4">
              This website collects information that you provide directly through the contact form, including your name and email address. This information is used solely for the purpose of responding to your inquiries.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">2. Use of Information</h2>
            <p className="text-gray-700 mb-4">
              The information collected is used to:
            </p>
            <ul className="list-disc list-inside text-gray-700 mb-4">
              <li>Respond to your inquiries and messages</li>
              <li>Send you information about my services</li>
              <li>Improve the website's content and functionality</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">3. Information Sharing</h2>
            <p className="text-gray-700 mb-4">
              Your personal information is not shared with third parties unless required by law or with your explicit consent.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">4. Data Security</h2>
            <p className="text-gray-700 mb-4">
              I implement appropriate security measures to protect your personal information from unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">5. Cookies</h2>
            <p className="text-gray-700 mb-4">
              This website uses cookies to improve user experience. You can control cookie settings through your browser preferences.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-semibold mb-4">6. Contact</h2>
            <p className="text-gray-700">
              If you have any questions about this Privacy Policy, please contact me through the contact form on this website.
            </p>
          </section>
        </div>
      </div>
    </div>
  )
} 