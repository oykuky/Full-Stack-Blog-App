export const authconfig = {
    pages: {
      signIn: "/login",
    },
    providers: [],
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.id = user.id;
          token.isAdmin = user.isAdmin;
        }
        return token;
      },
      // Oturum başlatıldığında çalışan geri çağırma fonksiyonu
      async session({ session, token }) {
        if (token) {
          session.user.id = token.id; // JWT'deki kullanıcı kimliğini oturuma ekler
          session.user.isAdmin = token.isAdmin;
        }
        return session;
      },
       // Sayfa erişimi kontrol eden geri çağırma fonksiyonu
      authorized({ auth, request }) {
        const user = auth?.user;
        const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");// Kullanıcının blog sayfasına erişmeye çalışıp çalışmadığını kontrol eder
        const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin");
        const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
  
        // ONLY ADMIN CAN REACH THE ADMIN DASHBOARD
  
        if (isOnAdminPanel && !user?.isAdmin) {
          return false;
        }
  
        // ONLY AUTHENTICATED USERS CAN REACH THE BLOG PAGE
        // Kullanıcı oturum açmamışsa, blog sayfasına erişimi engeller
        if (isOnBlogPage && !user) {  
          return false;  
        }
  
        // ONLY UNAUTHENTICATED USERS CAN REACH THE LOGIN PAGE
  
        if (isOnLoginPage && user) {
          return Response.redirect(new URL("/", request.nextUrl));
        }
  
        return true;  // Diğer tüm durumlar için erişime izin verir
      },
    },
  };