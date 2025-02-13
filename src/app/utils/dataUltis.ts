const data = [
  {
    sender_name: "Khanh Nguyen",
    timestamp_ms: 1736464487233,
    content: "The video call ended.",
    call_duration: "11:12:10",
    is_geoblocked_for_viewer: false,
    is_unsent_image_by_messenger_kid_parent: false,
    date: "January 09, 2025",
    time: "05:14:47 PM",
  },
  {
    sender_name: "Anh Nguyen",
    timestamp_ms: 1736465438445,
    content: "The video call ended.",
    call_duration: "00:15:34",
    is_geoblocked_for_viewer: false,
    is_unsent_image_by_messenger_kid_parent: false,
    date: "January 09, 2025",
    time: "05:30:38 PM",
  },
  {
    sender_name: "Khanh Nguyen",
    timestamp_ms: 1736543681787,
    content: "The video call ended.",
    call_duration: "10:57:42",
    is_geoblocked_for_viewer: false,
    is_unsent_image_by_messenger_kid_parent: false,
    date: "January 10, 2025",
    time: "03:14:41 PM",
  },
  {
    sender_name: "Anh Nguyen",
    timestamp_ms: 1736547251801,
    content: "The video call ended.",
    call_duration: "00:59:18",
    is_geoblocked_for_viewer: false,
    is_unsent_image_by_messenger_kid_parent: false,
    date: "January 10, 2025",
    time: "04:14:11 PM",
  },
  {
    sender_name: "Anh Nguyen",
    timestamp_ms: 1736547656293,
    content: "The video call ended.",
    call_duration: "00:04:30",
    is_geoblocked_for_viewer: false,
    is_unsent_image_by_messenger_kid_parent: false,
    date: "January 10, 2025",
    time: "04:20:56 PM",
  },
  {
    sender_name: "Anh Nguyen",
    timestamp_ms: 1736548897456,
    content: "Khanh Nguyen missed your video call.",
    call_duration: "00:00:00",
    is_geoblocked_for_viewer: false,
    is_unsent_image_by_messenger_kid_parent: false,
    date: "January 10, 2025",
    time: "04:41:37 PM",
  },
  {
    sender_name: "Anh Nguyen",
    timestamp_ms: 1736549603502,
    content: "The video call ended.",
    call_duration: "00:10:41",
    is_geoblocked_for_viewer: false,
    is_unsent_image_by_messenger_kid_parent: false,
    date: "January 10, 2025",
    time: "04:53:23 PM",
  },
];

const convertTimeToWholeHour = (timeString: string) => {
  const [hours, minutes, seconds] = timeString.split(":").map(Number);
  return hours + minutes / 60 + seconds / 3600;
};

function decode(s: string) {
  const decoder = new TextDecoder();
  const charCodes = Array.from(s).map((char) => char.charCodeAt(0));
  return decoder.decode(new Uint8Array(charCodes));
}

const convertTimeStampToDate = (number: number) => {
  const hours = Math.floor(number / 3600);
  const minutes = Math.floor((number % 3600) / 60);
  const seconds = number % 60;
  const formattedDuration = `${hours.toString().padStart(2, "0")}:${minutes
    .toString()
    .padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;

  return formattedDuration;
};
export { data, convertTimeToWholeHour, decode, convertTimeStampToDate };
