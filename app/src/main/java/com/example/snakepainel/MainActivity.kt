package com.example.snakepainel

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import com.example.snakepainel.databinding.ActivityMainBinding

class MainActivity : AppCompatActivity() {

    private lateinit var binding: ActivityMainBinding

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        // ViewBinding para evitar findViewById
        binding = ActivityMainBinding.inflate(layoutInflater)
        setContentView(binding.root)

        // Atualiza a pontuação exibida pelo SnakeView
        binding.snakeView.onScoreChanged = { score ->
            binding.tvScore.text = getString(R.string.score, score)
        }
    }

    // Captura as teclas de volume para controlar a direção (opcional)
    override fun onKeyDown(keyCode: Int, event: android.view.KeyEvent?): Boolean {
        when (keyCode) {
            android.view.KeyEvent.KEYCODE_VOLUME_UP -> binding.snakeView.turnLeft()
            android.view.KeyEvent.KEYCODE_VOLUME_DOWN -> binding.snakeView.turnRight()
        }
        return super.onKeyDown(keyCode, event