# Domain Layer:
  - Contains the business logic, entities, and interfaces. This layer is independent of any other layers.
# Use Cases Layer: 
  - Contains the application's use cases or business rules.
# Infrastructure Layer:
  - Contains implementations of the interfaces defined in the domain layer, such as database connections.
# Interface Layer:
  - Contains controllers, routes, and any other web framework-related code.

# Clean Architecture là gì?
- Clean Architecture là một mô hình kiến trúc phần mềm được phát triển bởi Robert C. Martin (còn gọi là Uncle Bob). Mục tiêu của Clean Architecture là tạo ra mã nguồn dễ bảo trì, dễ mở rộng và có thể kiểm tra dễ dàng. Kiến trúc này tập trung vào việc tách biệt các phần của ứng dụng theo các tầng khác nhau, giúp giảm sự phụ thuộc giữa chúng.

# Các nguyên tắc chính
  1. Tách biệt theo tầng: Ứng dụng được chia thành các tầng (layer) như:
    - Entities: Chứa các quy tắc nghiệp vụ cốt lõi.
    - Use Cases: Chứa logic ứng dụng và các quy trình nghiệp vụ.
    - Interface Adapters: Chuyển đổi dữ liệu giữa các tầng.
    - Frameworks and Drivers: Gồm các công nghệ và công cụ bên ngoài (như cơ sở dữ liệu, giao diện người dùng).
  2. Phụ thuộc theo hướng vào trong: Mã nguồn ở các tầng bên ngoài không được phụ thuộc vào các tầng bên trong. Điều này giúp cho việc thay đổi công nghệ (như thay đổi cơ sở dữ liệu hoặc framework) dễ dàng hơn mà không ảnh hưởng đến logic nghiệp vụ.
  3. Dễ kiểm thử: Do sự tách biệt rõ ràng, các phần của ứng dụng có thể được kiểm thử độc lập mà không cần phải thiết lập toàn bộ ứng dụng.
# Tại sao phải sử dụng Clean Architecture?
  1. Bảo trì dễ dàng: Khi mã nguồn được tổ chức rõ ràng, việc sửa lỗi hoặc thêm tính năng mới trở nên dễ dàng hơn.
  2. Tính mở rộng cao: Việc thay thế hoặc cập nhật các tầng bên ngoài (như framework hay cơ sở dữ liệu) có thể thực hiện mà không ảnh hưởng đến các phần khác của ứng dụng.
  3. Dễ dàng kiểm thử: Clean Architecture cho phép kiểm thử từng phần của ứng dụng một cách độc lập, giúp phát hiện lỗi sớm và đảm bảo chất lượng mã nguồn.
  4. Tăng tính linh hoạt: Các quy tắc nghiệp vụ có thể được giữ riêng biệt và không bị ảnh hưởng bởi các yếu tố bên ngoài, giúp bạn thay đổi công nghệ mà không cần sửa đổi logic nghiệp vụ.