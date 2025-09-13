import Button from "@components/UI/Button";

function PlanCard({ plan = {}, showDescription = true, showFeatures = false }) {

    const {
        name = "",
        callout = "",
        description = "",
        price = { monthly: "", yearly: "" },
        features = [],
        message
    } = plan;

    return (
        <div className="plan-card p-5 rounded-xl bg-green-95 border border-green-90">
            {/* Name */}
            <h3 className="font-semibold mb-2 text-2xl">{name}</h3>
            {/* Callout */}
            <p>{callout}</p>
            {/* Description */}
            {
                showDescription && <p className="my-7">{description}</p>
            }
            {/* Features */}
            {
                showFeatures && <ul className="plan-features my-3 bg-green-90 border border-green-85 rounded-lg">
                    {
                        features.map((feature, index) => (<li key={index} className="p-4 not-last-of-type:border-b not-last-of-type:border-b-green-80">
                            {feature}
                        </li>))
                    }
                </ul>
            }
            {/* Message */}
            {
                (showFeatures && message) && <div className="plan-message bg-dark-green-20 text-white p-5 rounded-md my-3">
                    {message}
                </div>
            }
            {/* Price */}
            <div className="plan-price my-4 flex items-center gap-1">
                <div className="text-4xl font-bold text-dark-green-25">${price.monthly}</div>
                <span className="font-medium text-grey-20">/month</span>
            </div>
            {/* Choose Plan */}
            <Button
                variant="primary"
                title="Choose This Plan"
                className="w-full text-center"
            >
                Choose Plan
            </Button>
        </div>
    )
}

export default PlanCard;