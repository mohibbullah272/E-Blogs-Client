


const Faqs = () => {
    return (
        <div className="md:p-10 p-5">
         
            <div>
            <div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" defaultChecked />
  <div className="collapse-title text-xl font-medium">What is the purpose of this blog?</div>
  <div className="collapse-content">
    <p>Our blog provides insightful articles on various topics, including technology, lifestyle, travel, and food. We aim to inspire, inform, and engage our readers</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How often do you publish new posts?</div>
  <div className="collapse-content">
    <p>We publish new articles every week, covering the latest trends, tips, and stories across various categories</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Can I submit my own article or guest post</div>
  <div className="collapse-content">
    <p>Yes, we accept guest posts! If you're interested in contributing, please reach out to us at www.eblog.com</p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">How do I find posts in a specific category?</div>
  <div className="collapse-content">
    <p>You can browse our blog posts by category using the navigation menu, where you'll find options like Technology, Lifestyle, Travel, Entertainment, and business </p>
  </div>
</div>
<div className="collapse collapse-arrow bg-base-200">
  <input type="radio" name="my-accordion-2" />
  <div className="collapse-title text-xl font-medium">Do I need to create an account to read posts?</div>
  <div className="collapse-content">
    <p>No, you can read all blog posts without an account. However, signing up allows you to comment, receive updates, and save your favorite articles. </p>
  </div>
</div>
            </div>
        </div>
    );
};

export default Faqs;