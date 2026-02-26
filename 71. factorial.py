number = int(input("Enter the number: "))

if not isinstance(number) or number < 0:
    print("Provide valid number")

result = 1

for i in range(number, 0, -1):
    result *= i

print(result)