"use client";

import { useMemo, useState } from "react";

export default function Home() {
  const [input, setInput] = useState("1");
  const [isSubmit, setIsSubmit] = useState(false);

  const options = [
    {
      id: "check1",
      value: "1",
      text: "Bảo tàng Lịch sử Quân sự Việt Nam",
      default: true,
      data1: [
        "Tham quan khu vực trưng bày về các cuộc kháng chiến chống ngoại xâm",
        "Khám phá khu vực trưng bày về các chiến thắng lịch sử",
        "Tham quan khu vực trưng bày về các loại vũ khí hiện đại",
      ],
      data2: [
        "ham quan khu vực trưng bày về cuộc kháng chiến chống Mỹ cứu nước",
        "Xem phim tư liệu về lịch sử quân sự Việt Nam.",
        "Tham quan các khu vực khác của bảo tàng như khu trưng bày về các anh hùng liệt sĩ, khu trưng bày về các loại hình nghệ thuật quân đội.",
      ],
    },
    {
      id: "check2",
      value: "2",
      text: "Hoàng Thành Thăng Long",
      data1: [
        "Khám phá Cổng Đoan Môn: Đây là cổng chính của Hoàng thành, kiến trúc đồ sộ và uy nghi. Bạn có thể chụp ảnh lưu niệm tại đây.",
        "Tham quan khu khảo cổ: Tìm hiểu về các tầng văn hóa liên tiếp nhau qua các thời kỳ Lý, Trần, Lê.",
        "Khám phá Điện Kính Thiên: Đây là nơi vua thiết triều, nghe tấu, tiếp sứ thần.",
      ],
      data2: [
        "Tham quan Cột cờ Hà Nội: Ngắm nhìn toàn cảnh Hoàng thành từ trên cao.",
        "Khám phá các khu vực khác: Nhà D67, Vườn hoa, Các phòng trưng bày",
        "Tham gia các hoạt động: Trải nghiệm làm đồ thủ công, Nghe giới thiệu về lịch sử",
      ],
    },
    {
      id: "check3",
      value: "3",
      text: "Grand World Hà Nội",
      data1: [
        "Khám phá K-Town: Đắm mình vào không gian Hàn Quốc với các cửa hàng, nhà hàng và quán cafe mang đậm phong cách xứ sở kim chi.",
        "Thưởng thức ẩm thực: Bạn có thể lựa chọn nhiều nhà hàng với các món ăn đa dạng từ Hàn Quốc, Nhật Bản, Việt Nam...",
        "Check-in sống ảo: Đừng bỏ lỡ cơ hội chụp những bức ảnh đẹp tại các góc phố, cầu tàu lãng mạn",
      ],
      data2: [
        "Đi thuyền Gondola: Trải nghiệm cảm giác lãng mạn khi dạo quanh các con kênh thơ mộng.",
        "Tham quan Venice: Khám phá những tòa nhà mang kiến trúc Ý cổ kính và các cửa hàng lưu niệm độc đáo.",
        "Mua sắm: Thỏa sức mua sắm các sản phẩm thời trang, đồ thủ công mỹ nghệ... tại các cửa hàng.",
      ],
    },
    {
      id: "check4",
      value: "4",
      text: "Nhà anh nhé =))",
      data1: ["bí mật"],
      data2: ["bí mật"],
    },
  ];

  const selectedOption = useMemo(() => {
    return options.find((option) => option.value === input);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [input]);

  return (
    <div className="bg-neutral-100">
      <div className="container mx-auto bg-neutral-100">
        {isSubmit ? (
          <div className="h-screen flex flex-col items-center justify-center">
            <p className="text-xl text-green-600 text-center">
              anh nhận được câu trả lời của bé rùi nha
            </p>
          </div>
        ) : (
          <form>
            <div className="px-4 py-6 space-y-12">
              <div className="pb-16">
                <h1 className="text-2xl font-semibold text-gray-900 text-center">
                  ❤️ Form cho Hồng Ngọc trả lời nèe ❤️
                </h1>

                <div className="mt-10 space-y-10">
                  <fieldset>
                    <legend className="text-lg font-semibold text-gray-900">
                      Thời gian: Thứ 7 ngày 07/12/2024
                    </legend>
                  </fieldset>
                  <fieldset>
                    <legend className="text-base font-semibold text-gray-900">
                      Em muốn đi đâu nà
                    </legend>
                    <div className="mt-6 space-y-6">
                      {options.map((option) => (
                        <div
                          key={option.id}
                          className="flex items-center gap-x-3"
                        >
                          <input
                            defaultChecked={option.default}
                            id={option.id}
                            name="address"
                            type="radio"
                            value={option.value}
                            className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden [&:not(:checked)]:before:hidden"
                            onChange={() => setInput(option.value)}
                          />
                          <label
                            htmlFor={option.id}
                            className="block text-sm/6 font-medium text-gray-900 cursor-pointer"
                          >
                            {option.text}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                  <fieldset>
                    <h2 className="text-lg font-semibold text-gray-900">
                      Lịch trình đây nha
                    </h2>
                    <div className="space-y-4 mt-2">
                      <h3 className="font-bold text-neutral-800">
                        Buổi sáng (8:00 - 11:30)
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          8:00 - 9:30: Đi ăn sáng và di chuyển đến địa điểm nha
                          <p className="text-sm text-gray-600 mt-1">
                            anh sẽ qua đón bé rùi mình đi ăn sáng nhé, mình có
                            thể ăn phở nè hay là ăn bún bò nè hoặc là bún riêu
                            cũng đc :)) ăn xong mình sẽ di chuyển đến địa điểm
                            đã chọn nha
                          </p>
                        </li>
                        <li>
                          9:30 - 11:30:
                          <ul className="list-disc pl-5 space-y-2">
                            {selectedOption?.data1?.map(
                              (item: any, index: any) => (
                                <li key={index}>{item}</li>
                              )
                            )}
                          </ul>
                        </li>
                      </ul>

                      <h3 className="font-bold pt-4 text-neutral-800">
                        Buổi trưa (11:30 - 13:00)
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          11:30 - 12:30: Mình sẽ đi ăn trưa nha
                          <p className="text-sm text-gray-600 mt-1">
                            chắc buổi trưa mình sẽ ăn gì nhẹ nhàng thui ha để
                            chiều còn đi chơi tiếp mà :))
                          </p>
                        </li>
                        <li>
                          12:30 - 13:00: Nghỉ ngơi và chuẩn bị cho buổi chiều
                          thôi nè
                        </li>
                      </ul>

                      <h3 className="font-bold pt-4 text-neutral-800">
                        Buổi chiều (13:00 - 18:00)
                      </h3>
                      <ul className="list-disc pl-5 space-y-2">
                        <li>
                          13:00 - 17:30:
                          <ul className="list-disc pl-5 space-y-2">
                            {selectedOption?.data2?.map(
                              (item: any, index: any) => (
                                <li key={index}>{item}</li>
                              )
                            )}
                          </ul>
                        </li>
                        <li>
                          17:30 - 18:00: Đến giờ về rùi á
                          <p className="text-sm text-gray-600 mt-1">
                            anh sẽ đưa bé về nhà anh toàn nhe =))
                          </p>
                        </li>
                      </ul>
                    </div>
                  </fieldset>
                </div>
                <p className="text-sm text-rose-400 mt-1">
                  Vậy là buổi đi chơi của mình đã hết rùi nè, cảm ơn bé đã đồng
                  ý đi chơi với anh nha 🥰
                </p>
              </div>
            </div>
            <div className="fixed left-1 bottom-0 w-full bg-neutral-100 py-4 flex items-center justify-center">
              <button
                type="button"
                onClick={() => setIsSubmit(true)}
                className="rounded-md bg-cyan-600 px-9 py-3 text-base font-semibold text-white shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              >
                Chốt nhaa
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
