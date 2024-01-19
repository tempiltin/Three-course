import React from "react";

const ErrorPage = () => {
  return (
    <main>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-10">
            <div className="alert alert-warning" role="alert">
              <h1>Kechirasiz Ilovada So'rovlar soni cheklandi ! 😞</h1>
              <article>
                Server kuniga dastur uchun 1000 ta so'rovga ruxsat beradi !
              </article>
              <article>
                1000 ta so'rovdan oshib ketsa serverga qo'shimcha to'lovni
                amalga oshirish kerak!
              </article>
            </div>
            <div className="alert alert-info" role="alert">
              <h4>Siz dasturga kirishingiz va ixtoyoriy tugmani bosish vaqtida bir qancha so'rovlar amalga oshiriladi! <br /> <br />
               tassavur qiling dasturdan 50 dan ortiq foydalanuvchi qidiruvni amalga oshirmoqda...! <br /><br />
                bu holatda barcha foydalanuvchilar qidiruvni oxirigacha amalga oshirolmaydi. <br /> <br />

                bu holatsa siz server uchun qo'shimcha bir marttalik to'lovni amalga oshirishingiz kerak bo'ladi !
              </h4>
            </div>
            <div className="alert alert-info" role="alert">
              <h4>
                Bu dastur ma'lumotlari turli adabiyotlar va kitoblar yordamida to'plangan ! <br /> <br />
                Iltimos shaxsiy ma'lumotlarimiz xavsizligini saqlang ! <br /> <br /> 
                 Dastur faqatgina savollaringizga javob berish uchun mo'ljallangan ! <br /> <br />
                 <strong> Iltimos To'g'ri maqsadda foydalaning !</strong>
              </h4>
            </div>
            <div className="alert alert-info" role="alert">
              <h4>
                Agar shartlarimiz ma'qul kelsa telegramda <strong>@tempiltin</strong> ga murojat qiling <br /> <br /> to'lov narxi har bir foydalanuvchi uchun <br /> 20 000 so'm
              </h4>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default ErrorPage;
