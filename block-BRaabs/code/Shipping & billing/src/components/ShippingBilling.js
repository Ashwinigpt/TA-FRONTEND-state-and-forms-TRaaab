import React from "react";

class Shippingbilling extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            address: '',
            zipcode: '',
            city: '',
            country: '',

            copy: false,

            shipping: {
                address: '',
                zipcode: '',
                city: '',
                country: '',
            },
        };
    }
    copyBilling = ({ target }) => {
        if (target.checked) {
            this.setState({ copy: true });
            this.state.shipping.address = this.state.address;
            this.state.shipping.zipcode = this.state.zipcode;
            this.state.shipping.city = this.state.city;
            this.state.shipping.country = this.state.country;
        } else {
            this.setState({ copy: true });
            this.state.shipping.address = '';
            this.state.shipping.zipcode = '';
            this.state.shipping.city = '';
            this.state.shipping.country = '';
        }
    };
    handleShipping = (event) => {
        let name = event.target.name;
        this.setState = {
            [name]: event.target.value,
        };
    };
    handleBilling = ({ target }) => {
        let name = target.name;
        this.setState = ({
            shipping: {
                [name]: target.value,
            },
        });
    };

    render() {
        return (
            <>
                <h1>Controlled Component</h1>
                <section className="flex">
                    <div className="flex-45">
                        <h2>Shipping Address</h2>
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="address"
                            onChange={this.handleShipping}
                            value={this.state.address}
                            placeholder="  e.g Dharamshala Himachal Pradesh"
                        ></input>
                        <label htmlFor="zipcode">ZIP/Postal Code</label>
                        <input
                            type="text"
                            name="zipcode"
                            onChange={this.handleShipping}
                            value={this.state.zipcode}
                            placeholder="  e.g 176218"
                        ></input>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            onChange={this.handleShipping}
                            value={this.state.city}
                            placeholder="  e.g Himachal Pradesh"
                        ></input>
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            name="country"
                            onChange={this.handleShipping}
                            value={this.state.country}
                            placeholder="  e.g India"
                        ></input>
                    </div>
                    <div className="flex-45">
                        <h2>Billing Address</h2>
                        <label htmlFor="address">Same as Billing Address?</label>
                        <input
                            type="checkbox"
                            name="same"
                            id="same"
                            onChange={this.handleBilling}
                        />
                        <label htmlFor="address">Address</label>
                        <input
                            type="text"
                            name="address"
                            onChange={this.handleBilling}
                            value={this.state.shipping.address}
                            placeholder="  e.g Dharamshala Himachal Pradesh"
                        ></input>
                        <label htmlFor="zipcode">ZIP/Postal Code</label>
                        <input
                            type="text"
                            name="zipcode"
                            onChange={this.handleBilling}
                            value={this.state.shipping.zipcode}
                            placeholder="  e.g 176218"
                        ></input>
                        <label htmlFor="city">City</label>
                        <input
                            type="text"
                            name="city"
                            onChange={this.handleBilling}
                            value={this.state.shipping.city}
                            placeholder="  e.g Himachal Pradesh"
                        ></input>
                        <label htmlFor="country">Country</label>
                        <input
                            type="text"
                            name="country"
                            onChange={this.handleBilling}
                            value={this.state.shipping.country}
                            placeholder="  e.g India"
                        ></input>
                    </div>
                </section>
            </>
        )
    }
}

export default Shippingbilling;