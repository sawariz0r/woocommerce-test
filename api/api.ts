import WooCommerceRestApi from "@woocommerce/woocommerce-rest-api";

export const api = new WooCommerceRestApi({
	url: "https://shop-interview.acrowd.se",
	consumerKey: process.env.WC_CONSUMER_KEY || "",
	consumerSecret: process.env.WC_CONSUMER_SECRET || "",
});
