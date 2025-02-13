import { useState } from "react";

export function useImageUpload(setTicketDetails: (arg: object) => void) {
  const [isImageUploading, setIsImageUploading] = useState(false);

  async function handleImageUpload(e) {
    const file = e.target.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ImageAvatar_ticketGenerator");
    data.append("cloud_name", "dltryg3ai");

    try {
      setIsImageUploading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dltryg3ai/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      if (!res.ok) throw new Error("Something went wrong");

      const imageAvatarUrl = await res.json();
      setTicketDetails((cur) => ({ ...cur, avatar: imageAvatarUrl?.url }));
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsImageUploading(false);
    }
  }

  function handleDragOver(e) {
    e.preventDefault();
  }

  async function handleDrop(e) {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (!file) return;

    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "ImageAvatar_ticketGenerator");
    data.append("cloud_name", "dltryg3ai");

    try {
      setIsImageUploading(true);
      const res = await fetch(
        "https://api.cloudinary.com/v1_1/dltryg3ai/image/upload",
        {
          method: "POST",
          body: data,
        }
      );

      if (!res.ok) throw new Error("Something went wrong");

      const imageAvatarUrl = await res.json();
      setTicketDetails((cur) => ({ ...cur, avatar: imageAvatarUrl?.url }));
    } catch (err) {
      toast.error(err.message);
    } finally {
      setIsImageUploading(false);
    }
    setIsDragging(false);
  }

  return {
    handleDrop,
    handleDragLeave,
    handleDragOver,
    handleImageUpload,
    isImageUploading,
  };
}
