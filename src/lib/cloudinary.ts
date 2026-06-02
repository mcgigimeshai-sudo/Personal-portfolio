import { Cloudinary } from '@cloudinary/url-gen';

// Cloudinary delivery instance. 
// Note: We only need the cloudName for delivering images on the frontend.
// The apiKey and apiSecret have been securely placed in the Environment Variables (.env)
// for potential future backend use (e.g., if you decide to implement an upload feature later).

export const cld = new Cloudinary({
  cloud: {
    cloudName: 'dojayb3ro' // Your Cloudinary Cloud Name
  }
});

/**
 * Helper function to generate an optimized Cloudinary image URL given a public ID.
 * Example usage: getCloudinaryImageUrl("my-folder/my-image")
 */
export function getCloudinaryImageUrl(publicId: string) {
  return cld
    .image(publicId)
    .format('auto')
    .quality('auto')
    .toURL();
}
