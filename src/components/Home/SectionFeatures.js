import feat1 from "../../assets/feat1.jpg";
import feat2 from "../../assets/feat2.jpg";
import feat3 from "../../assets/feat3.jpg";
import feat4 from "../../assets/feat4.jpg";

const FeatureItem = ({ title, description, image }) => {
  return (
    <div className="p-4">
      <div className="overflow-hidden relative pb-[66.66%] mb-2 w-full h-auto bg-cover rounded-lg">
        <img
          src={image}
          loading="lazy"
          className="object-cover absolute w-full h-full"
          alt={description}
        />
      </div>
      <h3 className="text-2xl font-medium">{title}</h3>
      <p className="text-lg text-on-surface-variant">{description}</p>
    </div>
  );
};

const SectionFeatures = () => {
  return (
    <div className="py-16 bg-surface-1">
      <div className="px-2 mx-auto max-w-6xl">
        <h2 className="mb-2 text-5xl font-medium text-center">
          Book Sharing and Beyond
        </h2>
        <p className="mb-4 text-2xl text-center text-on-surface-variant">
          Everything you can do in BookStop
        </p>
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <FeatureItem
            title="Exchange"
            description="Exchange books with others using a credit system"
            image={feat1}
          />
          <FeatureItem
            title="My Library"
            description="Organize books you intend to read, are reading, and have read"
            image={feat2}
          />
          <FeatureItem
            title="Feed"
            description="Read and write thoughts about books you read or anything"
            image={feat3}
          />
          <FeatureItem
            title="Events"
            description="Participate in events of all kinds, from competition to charity"
            image={feat4}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionFeatures;
