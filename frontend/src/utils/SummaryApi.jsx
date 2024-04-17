const commonUrl = "http://localhost:3000/api";
const SummaryApi = {
  signup: {
    url: `/api/signup`,
    method: "POST",
  },
  signin: {
    url: `/api/signin`,
    method: "POST",
  },
  logout: {
    url: `/api/logout`,
    method: "GET",
  },
  userDetails: {
    url: `/api/user-details`,
    method: "GET",
  },
  allUsers: {
    url: `/api/all-users`,
    method: "GET",
  },
  updateUser: {
    url: `/api/update-user`,
    method: "POST",
  },
  uploadProduct: {
    url: `/api/upload-product`,
    method: "POST",
  },
  allProducts: {
    url: `/api/all-products`,
    method: "GET",
  },
  updateProduct: {
    url: `/api/update-product`,
    method: "POST",
  },
};

export default SummaryApi;