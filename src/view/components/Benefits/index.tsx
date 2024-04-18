import {
  BenefitCardContainer,
  BenefitCardInfo,
  BenefitsContainer,
  BenefitsContent,
} from "./styles";

import quality from "../../../assets/images/benefits/quality.svg";
import shipping from "../../../assets/images/benefits/shipping.svg";
import support from "../../../assets/images/benefits/support.svg";
import warranty from "../../../assets/images/benefits/warranty.svg";

interface BenefitCardProps {
  img: string;
  title: string;
  description: string;
}

function BenefitCard({ img, title, description }: BenefitCardProps) {
  return (
    <BenefitCardContainer>
      <img src={img} alt="" />
      <BenefitCardInfo>
        <h3>{title}</h3>
        <p>{description}</p>
      </BenefitCardInfo>
    </BenefitCardContainer>
  );
}

export function Benefits() {
  const benefits = [
    {
      img: quality,
      title: "High Quality",
      description: "crafted from top materials",
    },
    {
      img: warranty,
      title: "Warranty Protection",
      description: "Over 2 years",
    },
    {
      img: shipping,
      title: "Free Shipping",
      description: "Order over 150 $",
    },
    {
      img: support,
      title: "24 / 7 Support",
      description: "Dedicated support",
    },
  ];

  return (
    <BenefitsContainer className="container">
      <BenefitsContent>
        {benefits.map((benefit, index) => (
          <BenefitCard key={index} {...benefit} />
        ))}
      </BenefitsContent>
    </BenefitsContainer>
  );
}
