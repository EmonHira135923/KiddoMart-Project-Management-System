export async function GET(request) {
  try {
    // Apnar database logic ekhane...
    const result = [{ id: 1, name: "Product 1" }];

    // Success Console Log
    console.log("✅ API Route: Data fetch successful!");

    return Response.json(
      {
        message: "All data fetch successfully.",
        success: true,
        result,
      },
      { status: 200 },
    );
  } catch (error) {
    // Error Console Log
    console.error("❌ API Route Error:", error.message);

    return Response.json(
      {
        message: "Failed to fetch data",
        success: false,
        error: error.message,
      },
      { status: 500 },
    );
  }
}
